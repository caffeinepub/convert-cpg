import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap } from 'lucide-react';

export function OfferSection() {
  const scrollToCalendly = () => {
    document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer" className="bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl overflow-hidden border-2 border-success/20 shadow-xl">
          <CardContent className="p-8 sm:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
              <Zap className="h-4 w-4" />
              <span>Limited Availability</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Scale Your Shopify Store?
            </h2>

            <p className="mb-6 text-lg text-muted-foreground">
              Get a complete website restructuring focused on CVR + AOV lift. We specialize in
              turning paid traffic into profitable customers through data-driven conversion
              optimization.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-accent/50 p-4">
                <div className="mb-1 text-sm font-medium text-muted-foreground">Focus</div>
                <div className="font-semibold text-foreground">CVR + AOV Lift</div>
              </div>
              <div className="rounded-lg bg-accent/50 p-4">
                <div className="mb-1 text-sm font-medium text-muted-foreground">Platform</div>
                <div className="font-semibold text-foreground">Shopify Expert</div>
              </div>
              <div className="rounded-lg bg-accent/50 p-4">
                <div className="mb-1 text-sm font-medium text-muted-foreground">Experience</div>
                <div className="font-semibold text-foreground">10+ Years</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={scrollToCalendly}
                className="group h-14 gap-2 px-8 text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
              >
                Schedule Your Free Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground">
                No commitment required • 30-minute consultation
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
