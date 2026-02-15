import { HeroSection } from './sections/HeroSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { ProcessSection } from './sections/ProcessSection';
import { OfferSection } from './sections/OfferSection';
import { CalendlySection } from './sections/CalendlySection';
import { Footer } from './sections/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CaseStudiesSection />
      <ProcessSection />
      <OfferSection />
      <CalendlySection />
      <Footer />
    </div>
  );
}
