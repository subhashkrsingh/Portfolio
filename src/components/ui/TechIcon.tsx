import { cn } from '@/utils/cn';
import type { TechIconStyle } from '@/data/tech-icons';
import { getTechIconDefinition } from '@/data/tech-icons';
import type { CSSProperties } from 'react';

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
};

export function TechIcon({ name, size = 24, className, ariaLabel, ariaHidden = false }: TechIconProps) {
  const tech = getTechIconDefinition(name);

  if (!tech) {
    return null;
  }

  const label = ariaLabel ?? tech.label;
  const wrapperStyle: TechIconStyle = {
    '--tech-shadow-blur': '8px',
  };

  return (
    <span
      aria-label={ariaHidden ? undefined : ariaLabel ?? label}
      aria-hidden={ariaHidden || undefined}
      role={ariaHidden ? undefined : 'img'}
      className={cn(
        'inline-flex shrink-0 items-center justify-center align-middle transition-transform duration-300 ease-out group-hover:scale-110 group-hover:[--tech-shadow-blur:12px]',
        tech.glyphs.length > 1 ? 'gap-1' : '',
        className,
      )}
      style={wrapperStyle}
    >
      {tech.glyphs.map(({ icon: Icon, color, glow }, index) => {
        const glyphStyle: TechIconStyle = {
          '--tech-glow': glow,
          color,
          filter: 'drop-shadow(0 0 var(--tech-shadow-blur) var(--tech-glow))',
        };

        return (
          <Icon
            key={`${tech.label}-${index}`}
            size={size}
            aria-hidden="true"
            focusable="false"
            style={glyphStyle as CSSProperties}
          />
        );
      })}
    </span>
  );
}
