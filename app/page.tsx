import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LaunchSection } from "@/components/launch-section";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { TextilePoleSection } from "@/components/textile-pole-section";
import { LocationSection } from "@/components/location-section";
import { BenefitsSection } from "@/components/benefits-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LaunchSection />
        <InfrastructureSection />
        <TextilePoleSection />
        <LocationSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
