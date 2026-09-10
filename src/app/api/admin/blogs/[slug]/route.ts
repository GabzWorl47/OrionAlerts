import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  deleteBlogPost,
  getBlog,
  setBlogPublished,
  updateBlogPost,
  type BlogInput,
} from "@/lib/blog-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;
  const post = await getBlog(slug, { includeDrafts: true });
  if (!post) {
    return NextResponse.json({ error: "Blog post not found." }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function PUT(request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;
  const body = (await request.json().catch(() => null)) as
    | (Partial<BlogInput> & { publishedOnly?: boolean })
    | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    if (typeof body.published === "boolean" && body.publishedOnly) {
      const post = await setBlogPublished(slug, body.published);
      return NextResponse.json({ post });
    }

    const existing = await getBlog(slug, { includeDrafts: true });
    if (!existing) {
      return NextResponse.json({ error: "Blog post not found." }, { status: 404 });
    }

    const post = await updateBlogPost(slug, {
      title: body.title ?? existing.title,
      slug: body.slug,
      excerpt: body.excerpt ?? existing.excerpt,
      category: body.category ?? existing.category,
      date: body.date ?? existing.date,
      author: body.author ?? existing.author,
      authorRole: body.authorRole ?? existing.authorRole,
      image: body.image ?? existing.image,
      takeawaysText: body.takeawaysText,
      takeaways: body.takeaways,
      body: body.body,
      sections: body.sections,
      published: body.published ?? existing.published,
    });

    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not update blog post." },
      { status: 400 },
    );
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await context.params;

  try {
    await deleteBlogPost(slug);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not delete blog post." },
      { status: 400 },
    );
  }
}
