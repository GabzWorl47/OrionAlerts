import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  clearLinkedInCache,
  fetchLinkedInPosts,
  getLinkedInStatus,
  refreshLinkedInPosts,
} from "@/lib/linkedin";
import {
  getPostsWithVisibility,
  mergeFetchedPosts,
  setDefaultVisibility,
  setManyPostVisibility,
  setPostVisibility,
} from "@/lib/linkedin-visibility";

async function requireAdmin() {
  return isAdminAuthenticated();
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const status = getLinkedInStatus();
  const feed = status.configured
    ? await fetchLinkedInPosts(12)
    : { posts: [] as Awaited<ReturnType<typeof fetchLinkedInPosts>>["posts"], error: undefined };

  if (feed.posts.length > 0) {
    await mergeFetchedPosts(feed.posts);
  }

  const visibility = await getPostsWithVisibility();

  return NextResponse.json({
    status,
    posts: visibility.posts,
    defaultVisible: visibility.defaultVisible,
    visibleCount: visibility.visibleCount,
    updatedAt: visibility.updatedAt,
    error: feed.error ?? status.cache?.error ?? null,
  });
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as {
    action?: string;
    postId?: string;
    visible?: boolean;
    updates?: Record<string, boolean>;
    defaultVisible?: boolean;
  } | null;

  const action = body?.action || "refresh";

  if (action === "clear-cache") {
    clearLinkedInCache();
    const visibility = await getPostsWithVisibility();
    return NextResponse.json({
      ok: true,
      status: getLinkedInStatus(),
      posts: visibility.posts,
      defaultVisible: visibility.defaultVisible,
      visibleCount: visibility.visibleCount,
    });
  }

  if (action === "set-visibility") {
    if (!body?.postId || typeof body.visible !== "boolean") {
      return NextResponse.json({ error: "postId and visible are required." }, { status: 400 });
    }
    await setPostVisibility(body.postId, body.visible);
    const visibility = await getPostsWithVisibility();
    return NextResponse.json({
      ok: true,
      status: getLinkedInStatus(),
      posts: visibility.posts,
      defaultVisible: visibility.defaultVisible,
      visibleCount: visibility.visibleCount,
      updatedAt: visibility.updatedAt,
    });
  }

  if (action === "set-many-visibility") {
    if (!body?.updates || typeof body.updates !== "object") {
      return NextResponse.json({ error: "updates object is required." }, { status: 400 });
    }
    await setManyPostVisibility(body.updates);
    const visibility = await getPostsWithVisibility();
    return NextResponse.json({
      ok: true,
      status: getLinkedInStatus(),
      posts: visibility.posts,
      defaultVisible: visibility.defaultVisible,
      visibleCount: visibility.visibleCount,
      updatedAt: visibility.updatedAt,
    });
  }

  if (action === "set-default-visibility") {
    if (typeof body?.defaultVisible !== "boolean") {
      return NextResponse.json({ error: "defaultVisible is required." }, { status: 400 });
    }
    await setDefaultVisibility(body.defaultVisible);
    const visibility = await getPostsWithVisibility();
    return NextResponse.json({
      ok: true,
      status: getLinkedInStatus(),
      posts: visibility.posts,
      defaultVisible: visibility.defaultVisible,
      visibleCount: visibility.visibleCount,
      updatedAt: visibility.updatedAt,
    });
  }

  const feed = await refreshLinkedInPosts(12);
  if (feed.posts.length > 0) {
    await mergeFetchedPosts(feed.posts);
  }
  const visibility = await getPostsWithVisibility();

  return NextResponse.json({
    ok: true,
    status: getLinkedInStatus(),
    posts: visibility.posts,
    defaultVisible: visibility.defaultVisible,
    visibleCount: visibility.visibleCount,
    updatedAt: visibility.updatedAt,
    error: feed.error ?? null,
  });
}
