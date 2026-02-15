import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'convert-cpg'
  );

  return (
    <footer className="border-t border-border bg-muted/30 py-8">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>© {currentYear} convert.cpg. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-success text-success" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
