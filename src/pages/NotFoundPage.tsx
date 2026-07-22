import { Seo } from '@/components/seo/Seo';
import { site } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title={`Page not found | ${site.name}`}
        description="The requested page could not be found."
        pathname="/404"
        noindex
      />
      <section className="section-shell section-padding">
        <div className="section-content">
          <div className="glass-card mx-auto max-w-3xl p-8 text-center md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">404</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white">Page not found</h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-text-secondary">
              The page you are looking for does not exist or has moved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/" variant="primary">
                <Home className="h-4 w-4" />
                Back home
              </Button>
              <Button href="/blog" variant="outline">
                <ArrowLeft className="h-4 w-4" />
                Blog index
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
