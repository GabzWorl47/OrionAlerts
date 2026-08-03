import { Hero } from "@/components/landing/Hero";
import { UniversalSolutionVideos } from "@/components/landing/UniversalSolutionVideos";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { HomepageSolutionsSection } from "@/components/landing/HomepageSolutionsSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Hero />
      <LogoMarquee />
      <UniversalSolutionVideos />
      <HomepageSolutionsSection />
      <ComparisonSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FinalCta />
    </div>
  );
}
