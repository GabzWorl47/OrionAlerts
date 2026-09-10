import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { createBlogPost, getAllBlogPosts, getBlogCategories } from "@/lib/blog-store";
import type { BlogInput } from "@/lib/blog-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [posts, categories] = await Promise.all([
    getAllBlogPosts(),
    getBlogCategories(),
  ]);
  return NextResponse.json({
    posts,
    categories,
    counts: {
      all: posts.length,
      published: posts.filter((post) => post.published).length,
      drafts: posts.filter((post) => !post.published).length,
    },
  });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as BlogInput | null;
  if (!body?.title || !body.excerpt || !body.image) {
    return NextResponse.json(
      { error: "Title, excerpt, and cover image are required." },
      { status: 400 },
    );
  }

  try {
    const post = await createBlogPost(body);
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not create blog post." },
      { status: 400 },
    );
  }
}
