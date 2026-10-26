import { createReadStream, promises as fs } from "fs";
import path from "path";
import { Readable } from "stream";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Serves /Videos/* with HTTP Range support (206 Partial Content).
 *
 * iOS Safari only plays <video> from servers that answer byte-range requests, and
 * Cloudflare Workers Static Assets ignore `Range` (they always return 200 with the
 * whole file). The files therefore live in `public/_videos/` instead of
 * `public/Videos/`: no static asset matches /Videos/*, so the request reaches this
 * handler, which reads the file and answers the requested byte range itself.
 *
 *  - Cloudflare Workers (OpenNext): the file comes from the static-assets binding
 *    (`env.ASSETS`, at /_videos/...).
 *  - Node (`next dev`, `next start`, the cPanel standalone build): the file is read
 *    from disk at public/_videos/...
 *
 * New videos go in public/_videos/ and are linked as /Videos/... A file put back in
 * public/Videos/ would be served by Workers Static Assets again, without Range.
 */
const SOURCE_DIR = "_videos";
const CACHE_CONTROL = "public, max-age=604800, stale-while-revalidate=2592000";
const CONTENT_TYPES: Record<string, string> = {
  mp4: "video/mp4",
  m4v: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
};
const SAFE_SEGMENT = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;

type RouteContext = { params: Promise<{ path: string[] }> };

type ByteRange = { start: number; end: number };

/** Single-range `bytes=` parser. null = no usable range (serve 200), "invalid" = 416. */
function parseRange(header: string | null, size: number): ByteRange | null | "invalid" {
  if (!header) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match) return null; // multi-range or other units: ignore and send the full file
  const [, startText, endText] = match;
  if (startText === "" && endText === "") return null;
  let start: number;
  let end: number;
  if (startText === "") {
    const suffix = Number(endText);
    if (suffix === 0) return "invalid";
    start = Math.max(size - suffix, 0);
    end = size - 1;
  } else {
    start = Number(startText);
    end = endText === "" ? size - 1 : Math.min(Number(endText), size - 1);
  }
  if (start >= size || start > end) return "invalid";
  return { start, end };
}

/** Drops bytes before `start` and stops after `end` (inclusive) of a byte stream. */
function sliceStream(source: ReadableStream<Uint8Array>, { start, end }: ByteRange) {
  let offset = 0;
  return source.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        const chunkStart = offset;
        offset += chunk.byteLength;
        if (offset <= start) return;
        const from = Math.max(start - chunkStart, 0);
        const to = Math.min(end + 1 - chunkStart, chunk.byteLength);
        if (to > from) controller.enqueue(chunk.subarray(from, to));
        if (offset > end) controller.terminate();
      },
    }),
  );
}

type VideoSource = {
  size: number;
  etag: string | null;
  lastModified: string | null;
  full(): ReadableStream<Uint8Array>;
  range(range: ByteRange): ReadableStream<Uint8Array>;
  /** Releases the source when no body is sent (HEAD, 304, 416). */
  discard(): void;
};

type AssetsBinding = { fetch(input: Request | string): Promise<Response> };

function getAssetsBinding(): AssetsBinding | undefined {
  // Set by the OpenNext Cloudflare worker for the duration of each request
  // (same lookup as getCloudflareContext() from @opennextjs/cloudflare).
  const context = (globalThis as Record<symbol, unknown>)[
    Symbol.for("__cloudflare-context__")
  ] as { env?: { ASSETS?: AssetsBinding } } | undefined;
  return context?.env?.ASSETS;
}

async function fromAssets(assets: AssetsBinding, url: URL): Promise<VideoSource | null> {
  const response = await assets.fetch(new Request(url, { method: "GET" }));
  if (response.status !== 200 || !response.body) {
    await response.body?.cancel();
    return null;
  }
  const etag = response.headers.get("etag");
  const lengthHeader = response.headers.get("content-length");
  if (lengthHeader !== null && /^\d+$/.test(lengthHeader)) {
    const body = response.body;
    const size = Number(lengthHeader);
    return {
      size,
      etag,
      lastModified: null,
      full: () => body,
      range: (range) =>
        range.start === 0 && range.end === size - 1 ? body : sliceStream(body, range),
      discard: () => void body.cancel().catch(() => {}),
    };
  }
  // No length advertised: buffer once so the total size is known.
  const bytes = new Uint8Array(await response.arrayBuffer());
  const once = (data: Uint8Array) =>
    new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(data);
        controller.close();
      },
    });
  return {
    size: bytes.byteLength,
    etag,
    lastModified: null,
    full: () => once(bytes),
    range: ({ start, end }) => once(bytes.subarray(start, end + 1)),
    discard: () => {},
  };
}

async function fromDisk(segments: string[]): Promise<VideoSource | null> {
  const filePath = path.join(process.cwd(), "public", SOURCE_DIR, ...segments);
  try {
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) return null;
    const stream = (options?: { start: number; end: number }) =>
      Readable.toWeb(createReadStream(filePath, options)) as ReadableStream<Uint8Array>;
    return {
      size: stat.size,
      etag: `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`,
      lastModified: stat.mtime.toUTCString(),
      full: () => stream(),
      range: ({ start, end }) => stream({ start, end }),
      discard: () => {},
    };
  } catch {
    return null;
  }
}

async function handle(request: Request, context: RouteContext, method: "GET" | "HEAD") {
  const { path: segments } = await context.params;
  const extension = segments.at(-1)?.split(".").pop()?.toLowerCase() ?? "";
  const contentType = CONTENT_TYPES[extension];
  if (!contentType || !segments.every((s) => SAFE_SEGMENT.test(s) && !s.includes(".."))) {
    return new Response("Not found", { status: 404 });
  }

  const assets = getAssetsBinding();
  const source = assets
    ? await fromAssets(assets, new URL(`/${SOURCE_DIR}/${segments.join("/")}`, request.url))
    : await fromDisk(segments);
  if (!source) return new Response("Not found", { status: 404 });

  const headers = new Headers({
    "Content-Type": contentType,
    "Accept-Ranges": "bytes",
    "Cache-Control": CACHE_CONTROL,
    "X-Content-Type-Options": "nosniff",
  });
  if (source.etag) headers.set("ETag", source.etag);
  if (source.lastModified) headers.set("Last-Modified", source.lastModified);

  const notModified = source.etag && request.headers.get("if-none-match") === source.etag;
  // If-Range: only honour the range when the client's copy is still current.
  const ifRange = request.headers.get("if-range");
  const rangeAllowed =
    !ifRange || ifRange === source.etag || (!!source.lastModified && ifRange === source.lastModified);
  const range = rangeAllowed ? parseRange(request.headers.get("range"), source.size) : null;

  let status = 200;
  let body: (() => ReadableStream<Uint8Array>) | null = source.full;
  if (range === "invalid") {
    status = 416;
    body = null;
    headers.set("Content-Range", `bytes */${source.size}`);
  } else if (range) {
    status = 206;
    body = () => source.range(range);
    headers.set("Content-Range", `bytes ${range.start}-${range.end}/${source.size}`);
    headers.set("Content-Length", String(range.end - range.start + 1));
  } else if (notModified) {
    status = 304;
    body = null;
  } else {
    headers.set("Content-Length", String(source.size));
  }

  if (!body || method === "HEAD") {
    source.discard();
    return new Response(null, { status, headers });
  }
  return new Response(body(), { status, headers });
}

export function GET(request: Request, context: RouteContext) {
  return handle(request, context, "GET");
}

export function HEAD(request: Request, context: RouteContext) {
  return handle(request, context, "HEAD");
}
