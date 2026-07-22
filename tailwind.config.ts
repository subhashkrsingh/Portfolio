import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(15, 23, 42, 0.55)',
        card: '0 1px 0 rgba(255,255,255,0.04), 0 24px 80px rgba(2, 6, 23, 0.45)',
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 0 32%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.16), transparent 0 28%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.14), transparent 0 32%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.48' },
          '50%': { opacity: '0.86' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
