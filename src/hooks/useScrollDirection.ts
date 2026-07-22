import { useEffect, useState } from 'react';

export function useScrollDirection(threshold = 8): 'up' | 'down' {
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - lastY) < threshold) {
        return;
      }

      setDirection(currentY > lastY ? 'down' : 'up');
      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return direction;
}
