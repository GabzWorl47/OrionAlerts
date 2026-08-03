export type LinkedInPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  url: string;
  image?: string;
};

type LinkedInApiPost = {
  id?: string;
  commentary?: string;
  createdAt?: number;
  publishedAt?: number;
  content?: {
    article?: {
      title?: string;
      description?: string;
      thumbnail?: string;
      source?: string;
    };
    media?: {
      id?: string;
    };
  };
};

type LinkedInListResponse = {
  elements?: LinkedInApiPost[];
};

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes
let cached:
  | { at: number; posts: LinkedInPost[]; configured: boolean; error?: string }
  | null = null;

function getConfig() {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN?.trim();
  const organizationId = process.env.LINKEDIN_ORGANIZATION_ID?.trim();
  const apiVersion = process.env.LINKEDIN_API_VERSION?.trim() || "202605";
  const pageUrl = process.env.LINKEDIN_PAGE_URL?.trim() || "https://www.linkedin.com";

  return {
    accessToken,
    organizationId,
    apiVersion,
    pageUrl,
    configured: Boolean(accessToken && organizationId),
  };
}

function firstLine(text: string) {
  return text.split(/\n+/).map((part) => part.trim()).find(Boolean) ?? text.trim();
}

function truncate(text: string, max: number) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

function toDateLabel(ms: number) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(ms));
  } catch {
    return new Date(ms).toISOString().slice(0, 10);
  }
}

function mapPost(raw: LinkedInApiPost): LinkedInPost | null {
  const id = raw.id;
  if (!id) return null;

  const commentary = (raw.commentary || "").trim();
  const articleTitle = raw.content?.article?.title?.trim();
  const articleDescription = raw.content?.article?.description?.trim();

  const body = commentary || articleDescription || articleTitle;
  if (!body) return null;

  const created = raw.publishedAt || raw.createdAt || Date.now();
  const titleSource = articleTitle || firstLine(body);

  return {
    id,
    title: truncate(titleSource, 110),
    excerpt: truncate(body, 180),
    date: new Date(created).toISOString(),
    dateLabel: toDateLabel(created),
    url: `https://www.linkedin.com/feed/update/${encodeURIComponent(id)}`,
    image: raw.content?.article?.thumbnail,
  };
}

export async function fetchLinkedInPosts(limit = 6): Promise<{
  configured: boolean;
  posts: LinkedInPost[];
  error?: string;
}> {
  const config = getConfig();

  if (!config.configured) {
    return { configured: false, posts: [] };
  }

  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return {
      configured: cached.configured,
      posts: cached.posts.slice(0, limit),
      error: cached.error,
    };
  }

  const author = encodeURIComponent(`urn:li:organization:${config.organizationId}`);
  const url =
    `https://api.linkedin.com/rest/posts?author=${author}` +
    `&q=author&count=${Math.min(Math.max(limit, 1), 20)}&sortBy=LAST_MODIFIED`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        "LinkedIn-Version": config.apiVersion,
        "X-Restli-Protocol-Version": "2.0.0",
        "X-RestLi-Method": "FINDER",
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      const error = `LinkedIn API ${response.status}${detail ? `: ${detail.slice(0, 180)}` : ""}`;
      cached = { at: Date.now(), posts: [], configured: true, error };
      return { configured: true, posts: [], error };
    }

    const data = (await response.json()) as LinkedInListResponse;
    const posts = (data.elements ?? [])
      .map(mapPost)
      .filter((post): post is LinkedInPost => Boolean(post));

    cached = { at: Date.now(), posts, configured: true };
    return { configured: true, posts: posts.slice(0, limit) };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch LinkedIn posts";
    cached = { at: Date.now(), posts: [], configured: true, error: message };
    return { configured: true, posts: [], error: message };
  }
}

export function getLinkedInPageUrl() {
  return getConfig().pageUrl;
}

export function getLinkedInStatus() {
  const config = getConfig();
  return {
    configured: config.configured,
    hasAccessToken: Boolean(config.accessToken),
    hasOrganizationId: Boolean(config.organizationId),
    organizationId: config.organizationId
      ? `${config.organizationId.slice(0, 2)}…${config.organizationId.slice(-2)}`
      : null,
    apiVersion: config.apiVersion,
    pageUrl: config.pageUrl,
    cache: cached
      ? {
          ageSeconds: Math.round((Date.now() - cached.at) / 1000),
          postCount: cached.posts.length,
          error: cached.error ?? null,
        }
      : null,
  };
}

export function clearLinkedInCache() {
  cached = null;
}

export async function refreshLinkedInPosts(limit = 6) {
  clearLinkedInCache();
  return fetchLinkedInPosts(limit);
}
