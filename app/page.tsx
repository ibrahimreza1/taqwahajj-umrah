import { HeroScroll } from "@/components/sections/home/HeroScroll";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { HighlightsDisplay } from "@/components/sections/home/HighlightsDisplay";
import { FeaturedPackages } from "@/components/sections/home/FeaturedPackages";
import { WhyTaqwa } from "@/components/sections/home/WhyTaqwa";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { Footer } from "@/components/sections/shared/Footer";

export default function Home() {
  return (
    <main>
      <HeroScroll />
      <TrustBar />
      <HighlightsDisplay />
      <FeaturedPackages />
      <WhyTaqwa />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
