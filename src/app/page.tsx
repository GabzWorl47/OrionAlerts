import { Hero } from "@/components/landing/Hero";
import { UniversalSolutionVideos } from "@/components/landing/UniversalSolutionVideos";
import { CertificateMarquee } from "@/components/landing/CertificateMarquee";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";

export default function HomePage() {
  return (
    <div className="site-shell">
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
