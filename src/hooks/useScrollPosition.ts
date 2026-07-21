import { useEffect, useState } from "react";

export function useScrollPosition(threshold = 48) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const update = () => setHasScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return hasScrolled;
}
