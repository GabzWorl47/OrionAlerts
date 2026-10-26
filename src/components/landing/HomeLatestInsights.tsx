import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sortBlogPosts, type BlogPost } from "@/lib/blogs";
import { mediumImage } from "@/lib/responsive-images";

/** The newest published posts, as plain links (rendered on the server). */
export function HomeLatestInsights({ posts }: { posts: BlogPost[] }) {
  const latest = sortBlogPosts(posts).slice(0, 3);
  if (!latest.length) return null;

  return (
    <section aria-labelledby="home-insights-heading" className="bg-bg py-14 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Blog</p>
            <h2
              id="home-insights-heading"
              className="mt-2 text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
            >
              Latest insights
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue transition hover:gap-2.5"
          >
            All articles
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {latest.map((post) => (
            <li key={post.slug}>
              <article className="group relative h-full overflow-hidden rounded-[20px] border border-line bg-white transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_18px_40px_-28px_rgba(15,61,120,0.4)]">
                {post.image ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
                    <Image
                      src={mediumImage(post.image)}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.01em] text-text">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="after:absolute after:inset-0 group-hover:text-blue"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-caption">
                    <time dateTime={post.date}>{post.dateLabel}</time> · {post.readTime}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
