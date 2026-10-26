import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { UniversalSolutionVideos } from "@/components/landing/UniversalSolutionVideos";
import { CertificateMarquee } from "@/components/landing/CertificateMarquee";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { HomeEntityStatement } from "@/components/landing/HomeEntityStatement";
import { HomepageSolutionsSection } from "@/components/landing/HomepageSolutionsSection";
import { HomeIndustriesStrip } from "@/components/landing/HomeIndustriesStrip";
import { HomeLatestInsights } from "@/components/landing/HomeLatestInsights";
import { HomeFaq } from "@/components/landing/HomeFaq";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";
import {
  faqPageJsonLd,
  JsonLdScript,
  softwareApplicationJsonLd,
  videoObjectJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { homepageEntityFaq, homepageFaqs } from "@/lib/homepage";
import { site } from "@/lib/site";
import { publicVideoAssets } from "@/lib/videos";
import {
  buildPageMetadata,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  TITLE_SUFFIX,
} from "@/lib/seo";

// The root layout's title template only applies to child segments, not to
// this page, so the brand suffix is added here explicitly.
export const metadata: Metadata = buildPageMetadata({
  title: `${SITE_DEFAULT_TITLE}${TITLE_SUFFIX}`,
  absoluteTitle: true,
  description: SITE_DEFAULT_DESCRIPTION,
  pathname: "/",
});

// "Latest insights" reads the blog store; refresh hourly so new posts appear
// without a rebuild.
export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getPublishedBlogPosts().catch(() => []);
  const homepageVideos = publicVideoAssets.filter((video) => video.pagePath === "/");

  return (
    <div className="site-shell">
      <JsonLdScript data={websiteJsonLd()} />
      {/* The product itself (Nebula OS has its own node on /nebula-os). */}
      <JsonLdScript
        data={softwareApplicationJsonLd({
          name: site.name,
          description: site.description,
          path: "/",
        })}
      />
      <JsonLdScript data={faqPageJsonLd([homepageEntityFaq, ...homepageFaqs])} />
      {homepageVideos.map((video) => (
        <JsonLdScript
          key={video.id}
          data={videoObjectJsonLd({
            name: video.name,
            description: video.description,
            contentPath: video.contentPath,
            thumbnailPath: video.thumbnailPath,
            pagePath: video.pagePath,
          })}
        />
      ))}
      <Hero />
      <HomeEntityStatement />
      <LogoMarquee />
      <HomepageSolutionsSection />
      <UniversalSolutionVideos />
      <CertificateMarquee />
      <UseCasesSection />
      <HomeIndustriesStrip />
      <HomeLatestInsights posts={posts} />
      <HomeFaq />
      <TestimonialsSection />
      <FinalCta />
    </div>
  );
}
