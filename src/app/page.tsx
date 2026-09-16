import { Hero } from "@/components/landing/Hero";
import { UniversalSolutionVideos } from "@/components/landing/UniversalSolutionVideos";
import { CertificateMarquee } from "@/components/landing/CertificateMarquee";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";
import {
  JsonLdScript,
  videoObjectJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { publicVideoAssets } from "@/lib/videos";

export default function HomePage() {
  const homepageVideos = publicVideoAssets.filter((video) => video.pagePath === "/");

  return (
    <div className="site-shell">
      <JsonLdScript data={websiteJsonLd()} />
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
      <LogoMarquee />
      <UniversalSolutionVideos />
      <CertificateMarquee />
      <UseCasesSection />
      <TestimonialsSection />
      <FinalCta />
    </div>
  );
}
