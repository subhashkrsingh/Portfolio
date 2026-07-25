import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlight?: string;
  className?: string;
  action?: ReactNode;
};

function renderTitle(title: string, highlight?: string) {
  if (!highlight) {
    return title;
  }

  const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (index < 0) {
    return title;
  }

  const before = title.slice(0, index);
  const match = title.slice(index, index + highlight.length);
  const after = title.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className="text-gradient">{match}</span>
      {after}
    </>
  );
}

export function SectionHeading({ eyebrow, title, description, highlight, className, action }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-5 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-3xl">
        <Badge variant="secondary" className="mb-5">
          {eyebrow}
        </Badge>
        <h2 className="max-w-3xl font-display text-4xl font-black tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl">
          {renderTitle(title, highlight)}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
