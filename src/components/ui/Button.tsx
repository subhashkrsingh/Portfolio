import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  download?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border border-primary/35 bg-primary/14 text-white shadow-[0_0_0_1px_rgba(59,130,246,0.16),0_18px_60px_rgba(59,130,246,0.16)] hover:bg-primary/20',
  secondary:
    'border border-secondary/30 bg-secondary/12 text-white shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_18px_60px_rgba(139,92,246,0.12)] hover:bg-secondary/18',
  ghost: 'border border-transparent bg-transparent text-text-primary hover:bg-white/5',
  outline: 'border border-white/12 bg-white/5 text-text-primary hover:border-white/20 hover:bg-white/10',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-0',
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? undefined : onClick}
        className={cn(classes, disabled && 'pointer-events-none opacity-60')}
        whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
