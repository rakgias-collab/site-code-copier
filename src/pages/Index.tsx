import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <TestimonialSection />
      <LocationSection />
      <Footer />
    </main>
  );
};

export default Index;
