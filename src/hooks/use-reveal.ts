import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element when it scrolls into view.
 * Usage: const { ref, shown } = useReveal();
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const revealIfAlreadyVisible = () => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight * 0.92 && bottom > 0) {
        setShown(true);
        return true;
      }
      return false;
    };

    if (revealIfAlreadyVisible()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: Math.min(threshold, 0.08), rootMargin: "0px 0px -24px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, shown };
}
