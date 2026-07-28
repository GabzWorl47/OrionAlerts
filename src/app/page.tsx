import { Hero } from "@/components/landing/Hero";
import { FeatureCarousel } from "@/components/landing/FeatureCarousel";
import { PlatformSection } from "@/components/landing/PlatformSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { CustomerTrustSection } from "@/components/landing/CustomerTrustSection";
import { ProductExplore } from "@/components/landing/ProductExplore";
import { TrialCta } from "@/components/landing/TrialCta";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Hero />
      <FeatureCarousel />
      <PlatformSection />
      <WhyChooseSection />
      <CustomerTrustSection />
      <ProductExplore />
      <TrialCta />
    </div>
  );
}
