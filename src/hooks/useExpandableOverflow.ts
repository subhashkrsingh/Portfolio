import { useId, useLayoutEffect, useRef, useState, type Dispatch, type MutableRefObject, type RefObject, type SetStateAction } from 'react';

type UseExpandableOverflowOptions = {
  itemCount: number;
  collapsedMaxHeight?: number;
};

type UseExpandableOverflowResult = {
  containerRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  itemRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  hiddenCount: number;
  hasOverflow: boolean;
  shouldShowToggle: boolean;
  maxHeight: number;
  toggleId: string;
  registerItemRef: (index: number) => (node: HTMLDivElement | null) => void;
};

const DEFAULT_COLLAPSED_HEIGHT = 232;

export function useExpandableOverflow({
  itemCount,
  collapsedMaxHeight = DEFAULT_COLLAPSED_HEIGHT,
}: UseExpandableOverflowOptions): UseExpandableOverflowResult {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hiddenCount, setHiddenCount] = useState(0);
  const [expandedHeight, setExpandedHeight] = useState(collapsedMaxHeight);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const toggleId = useId();

  useLayoutEffect(() => {
    const measure = () => {
      const content = contentRef.current;
      if (!content) {
        return;
      }

      const nodes = itemRefs.current.filter((node): node is HTMLDivElement => Boolean(node));
      if (nodes.length === 0) {
        setHiddenCount(0);
        setExpandedHeight(collapsedMaxHeight);
        return;
      }

      const top = content.getBoundingClientRect().top;
      const cutoff = top + collapsedMaxHeight;
      let nextVisibleCount = 0;

      for (const node of nodes) {
        if (node.getBoundingClientRect().bottom <= cutoff - 1) {
          nextVisibleCount += 1;
        }
      }

      const nextHiddenCount = Math.max(itemCount - nextVisibleCount, 0);
      setHiddenCount((current) => (current === nextHiddenCount ? current : nextHiddenCount));

      const nextExpandedHeight = Math.max(Math.ceil(content.scrollHeight), collapsedMaxHeight);
      setExpandedHeight((current) => (current === nextExpandedHeight ? current : nextExpandedHeight));
    };

    let frame = 0;

    const scheduleMeasure = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    };

    scheduleMeasure();

    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleMeasure);
    if (contentRef.current) {
      observer?.observe(contentRef.current);
    }
    window.addEventListener('resize', scheduleMeasure);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', scheduleMeasure);
      window.cancelAnimationFrame(frame);
    };
  }, [collapsedMaxHeight, itemCount]);

  const hasOverflow = hiddenCount > 0;
  const maxHeight = isExpanded ? expandedHeight : collapsedMaxHeight;

  return {
    containerRef,
    contentRef,
    itemRefs,
    isExpanded,
    setIsExpanded,
    hiddenCount,
    hasOverflow,
    shouldShowToggle: hasOverflow,
    maxHeight,
    toggleId,
    registerItemRef: (index: number) => (node: HTMLDivElement | null) => {
      itemRefs.current[index] = node;
    },
  };
}
