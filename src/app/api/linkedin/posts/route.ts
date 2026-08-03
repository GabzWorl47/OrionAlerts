import { NextResponse } from "next/server";
import { fetchLinkedInPosts, getLinkedInPageUrl } from "@/lib/linkedin";
import { getVisiblePosts, readVisibilityStore } from "@/lib/linkedin-visibility";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawCount = Number(searchParams.get("count") || "6");
  const count = Number.isFinite(rawCount) ? Math.min(Math.max(rawCount, 1), 12) : 6;

  const result = await fetchLinkedInPosts(Math.max(count, 12));
  const store = await readVisibilityStore();

  // Prefer live LinkedIn results; fall back to admin snapshots when offline/unconfigured
  const sourcePosts = result.posts.length > 0 ? result.posts : store.posts;
  const visible = (await getVisiblePosts(sourcePosts)).slice(0, count);

  return NextResponse.json(
    {
      configured: result.configured || store.posts.length > 0,
      pageUrl: getLinkedInPageUrl(),
      posts: visible,
      error: result.error ?? null,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}
