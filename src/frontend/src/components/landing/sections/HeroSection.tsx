import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const scrollToCalendly = () => {
    document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/convert-cpg-hero-bg.dim_1600x900.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {/* Logo/Wordmark */}
        <div className="mb-12 flex justify-center sm:mb-16">
          <img
            src="/assets/generated/ccpg-logo-top.dim_512x512.png"
            alt="CCPG"
            className="h-12 w-auto sm:h-16"
          />
        </div>

        {/* Main Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-2 text-sm font-medium text-success">
            <TrendingUp className="h-4 w-4" />
            <span>Conversion Rate Specialist</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We Help CPG Brands Increase Shopify Conversion Rates From Paid Traffic
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Website restructuring focused on CVR + AOV lift
          </p>

          {/* Credentials Grid */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-success sm:text-3xl">$150M</div>
              <div className="text-sm text-muted-foreground">in Online Sales For Brands</div>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-success sm:text-3xl">84%</div>
              <div className="text-sm text-muted-foreground">Client Success Rate</div>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-success sm:text-3xl">3.12%</div>
              <div className="text-sm text-muted-foreground">Average Conversion Rate</div>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <div className="text-lg font-semibold text-foreground">Certified Shopify Partner</div>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm sm:col-span-2">
              <div className="text-lg font-semibold text-foreground">
                Over 10 Years of Conversion Optimization on Shopify
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            onClick={scrollToCalendly}
            className="group h-14 gap-2 px-8 text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
          >
            Book Your Free Audit
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
