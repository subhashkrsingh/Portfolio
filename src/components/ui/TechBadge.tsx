import { cn } from '@/utils/cn';
import { getTechIconDefinition } from '@/data/tech-icons';
import { TechIcon } from '@/components/ui/TechIcon';

type TechBadgeProps = {
  name: string;
  label?: string;
  className?: string;
  iconSize?: number;
  href?: string;
  tabIndex?: number;
  ariaHidden?: boolean;
};

export function TechBadge({
  name,
  label,
  className,
  iconSize = 14,
  href,
  tabIndex,
  ariaHidden,
}: TechBadgeProps) {
  const tech = getTechIconDefinition(name);
  const resolvedLabel = label ?? tech?.label ?? name;
  const sharedClassName = cn(
    'inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium text-text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-text-primary',
    href ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-card)]' : '',
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={resolvedLabel}
        aria-hidden={ariaHidden || undefined}
        tabIndex={tabIndex}
        className={sharedClassName}
      >
        {tech ? (
          <TechIcon name={name} size={iconSize} className="shrink-0" ariaHidden />
        ) : (
          <span className="h-2 w-2 shrink-0 rounded-full bg-current opacity-60" aria-hidden="true" />
        )}
        <span>{resolvedLabel}</span>
      </a>
    );
  }

  return (
    <span
      aria-label={resolvedLabel}
      aria-hidden={ariaHidden || undefined}
      tabIndex={tabIndex}
      className={sharedClassName}
    >
      {tech ? (
        <TechIcon name={name} size={iconSize} className="shrink-0" ariaHidden />
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-current opacity-60" aria-hidden="true" />
      )}
      <span>{resolvedLabel}</span>
    </span>
  );
}
