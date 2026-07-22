import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, className, action }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-5 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-3xl">
        <Badge variant="outline" className="mb-5">
          {eyebrow}
        </Badge>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
