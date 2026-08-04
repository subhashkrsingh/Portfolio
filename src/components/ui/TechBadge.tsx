import { cn } from '@/utils/cn';
import { getTechIconDefinition } from '@/data/tech-icons';
import { TechIcon } from '@/components/ui/TechIcon';

type TechBadgeProps = {
  name: string;
  label?: string;
  className?: string;
  iconSize?: number;
};

export function TechBadge({ name, label, className, iconSize = 14 }: TechBadgeProps) {
  const tech = getTechIconDefinition(name);
  const resolvedLabel = label ?? tech?.label ?? name;

  return (
    <span
      title={resolvedLabel}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium text-text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-text-primary',
        className,
      )}
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
