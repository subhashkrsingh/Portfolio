import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'outline';

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const badgeStyles: Record<BadgeVariant, string> = {
  primary: 'border-primary/30 bg-primary/12 text-primary',
  secondary: 'border-secondary/30 bg-secondary/12 text-secondary',
  success: 'border-success/30 bg-success/12 text-success',
  warning: 'border-warning/30 bg-warning/12 text-warning',
  outline: 'border-border bg-[var(--color-card)] text-text-secondary',
};

export function Badge({ children, variant = 'outline', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em]',
        badgeStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
