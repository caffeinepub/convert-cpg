import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const caseStudies = [
  {
    id: 1,
    metrics: {
      cvr: { before: '1.4%', after: '4.31%' },
      aov: { before: '$69.40', after: '$85.07' },
      revenue: { before: '$4,000/m', after: '$17,000/m' },
    },
    changes: [
      'Complete Conversion Focused Rebuild',
      'Clear Offer Stack',
      'Urgency layering',
      'Proper Mobile Hierarchy',
    ],
  },
  {
    id: 2,
    metrics: {
      cvr: { before: '3.3%', after: '4.73%' },
      aov: { before: '$78.04', after: '$91.00' },
      revenue: { before: '$84,150/m', after: '$138,924/m' },
    },
    changes: [
      'Structured Proof',
      'Full PDP restructuring',
      'Clear Offer Stack',
      'Bundle logic',
      'AOV lift strategy',
    ],
  },
  {
    id: 3,
    metrics: {
      cvr: { before: '0.52%', after: '1.19%' },
      aov: { before: '$315.45', after: '$316.79' },
      revenue: { before: '$27,727/m', after: '$47,019/m' },
    },
    changes: [
      'Bundle logic',
      'Trust badges & social proof placement',
      'Clear Offer Stack',
      'UGC placement strategy',
      'Mobile-first optimization',
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proven Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Real brands. Real growth. Real revenue impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="bg-accent/50 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Case Study {study.id}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Metrics */}
                <div className="mb-6 space-y-4">
                  <div>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Conversion Rate
                    </div>
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-muted-foreground">{study.metrics.cvr.before}</span>
                      <ArrowRight className="h-4 w-4 text-success" />
                      <span className="text-success">{study.metrics.cvr.after}</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Average Order Value
                    </div>
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-muted-foreground">{study.metrics.aov.before}</span>
                      <ArrowRight className="h-4 w-4 text-success" />
                      <span className="text-success">{study.metrics.aov.after}</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Monthly Revenue
                    </div>
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-muted-foreground">{study.metrics.revenue.before}</span>
                      <ArrowRight className="h-4 w-4 text-success" />
                      <span className="text-success">{study.metrics.revenue.after}</span>
                    </div>
                  </div>
                </div>

                <Separator className="mb-4" />

                {/* Changes */}
                <div>
                  <div className="mb-3 text-sm font-semibold text-foreground">What We Changed:</div>
                  <ul className="space-y-2">
                    {study.changes.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
