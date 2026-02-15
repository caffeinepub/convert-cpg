import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Audit + Revenue Leak Mapping',
    description: 'Identify exactly where you\'re losing conversions and revenue',
  },
  {
    number: 2,
    title: 'Custom Structure Rebuild',
    description: 'Redesign your store architecture for maximum conversion potential',
  },
  {
    number: 3,
    title: 'Offer & Bundle Optimization',
    description: 'Strategic offer stacks and bundle logic to increase AOV',
  },
  {
    number: 4,
    title: '30-Day Performance Check',
    description: 'Monitor results and fine-tune for sustained growth',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground">
            From audit to optimization, a proven path to higher conversions
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, idx) => (
              <Card
                key={step.number}
                className="relative overflow-hidden border-2 transition-all hover:border-success/50 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-xl font-bold text-success">
                      {step.number}
                    </div>
                    <CheckCircle2 className="h-6 w-6 text-success/40" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
                {/* Connector line for desktop */}
                {idx < steps.length - 2 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-success/20 md:block" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
