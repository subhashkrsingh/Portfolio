import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ButtonHTMLAttributes, type PointerEvent, type ReactNode } from 'react';

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
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  title?: string;
};

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border border-transparent bg-[linear-gradient(135deg,#b66dff_0%,#8a7cff_48%,#4fc3ff_100%)] !text-white shadow-[0_18px_40px_rgba(91,92,255,0.24),0_0_0_1px_rgba(182,109,255,0.2)] hover:shadow-[0_22px_56px_rgba(91,92,255,0.32)]',
  secondary:
    'border border-border bg-[var(--color-card)] text-text-primary shadow-[0_10px_30px_rgba(2,6,23,0.08)] backdrop-blur-xl hover:border-primary/30 hover:bg-[var(--color-surface)]',
  ghost: 'border border-transparent bg-transparent text-text-primary hover:border-border hover:bg-[var(--color-card)]',
  outline:
    'border border-border bg-[var(--color-card)] text-text-primary shadow-[0_10px_28px_rgba(2,6,23,0.06)] hover:border-primary/30 hover:bg-[var(--color-surface)]',
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
  ariaLabel,
  ariaExpanded,
  ariaControls,
  title,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleTimeouts = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      rippleTimeouts.current.forEach((timeout) => window.clearTimeout(timeout));
      rippleTimeouts.current = [];
    };
  }, []);

  const classes = cn(
    'relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0',
    variantStyles[variant],
    className,
  );

  function createRipple(event: PointerEvent<HTMLElement>) {
    if (prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.45;
    const ripple: Ripple = {
      id: Date.now() + Math.round(Math.random() * 1000),
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
      size,
    };

    setRipples((current) => [...current, ripple]);

    const timeout = window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id));
    }, 700);

    rippleTimeouts.current.push(timeout);
  }

  const rippleLayer = (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="button-ripple absolute rounded-full bg-white/35"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </span>
  );

  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        tabIndex={disabled ? -1 : undefined}
        title={title}
        onClick={disabled ? undefined : onClick}
        onPointerDown={variant === 'primary' ? createRipple : undefined}
        className={cn(classes, disabled && 'pointer-events-none opacity-60')}
        whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {rippleLayer}
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      title={title}
      onPointerDown={variant === 'primary' ? createRipple : undefined}
      className={classes}
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {rippleLayer}
      {content}
    </motion.button>
  );
}
