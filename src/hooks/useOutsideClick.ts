import { useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement>(onOutsideClick: () => void) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (!ref.current || !target || ref.current.contains(target)) {
        return;
      }

      onOutsideClick();
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [onOutsideClick]);

  return ref;
}
