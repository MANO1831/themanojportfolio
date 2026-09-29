import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const mobileMediaQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

export function useIsMobile() {
  return React.useSyncExternalStore(
    (onChange) => {
      const mediaQuery = window.matchMedia(mobileMediaQuery);
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    () => window.matchMedia(mobileMediaQuery).matches,
    () => false,
  );
}
