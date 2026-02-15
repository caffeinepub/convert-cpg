import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';
import { CALENDLY_URL } from '@/config/marketing';

export function CalendlySection() {
  return (
    <section id="calendly" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <Calendar className="h-8 w-8 text-success" />
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Talk About Your Store
          </h2>

          <p className="mb-8 text-lg text-muted-foreground">
            Book a free 30-minute consultation to discuss your conversion goals and see how we can
            help you increase revenue from your paid traffic.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              asChild
              className="group h-14 gap-2 px-8 text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5" />
                Book Your Free Consultation
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Or click here to view available times
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
