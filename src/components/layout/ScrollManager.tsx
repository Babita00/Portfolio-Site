import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the hash target after navigation, or to the top when changing pages. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }, [pathname, hash]);

  return null;
}
