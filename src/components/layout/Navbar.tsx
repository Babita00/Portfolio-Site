import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, profile } from '../../data/profile';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line bg-paper/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <nav className="page-x flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight">{profile.name}</span>
          <span className="hidden font-mono text-[0.6875rem] text-ink-muted sm:inline">/ full stack</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={{ pathname: '/', hash: `#${item.id}` }}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.cv.href}
              download={profile.cv.fileName}
              className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Download size={14} aria-hidden="true" />
              CV
              <span className="sr-only">(download PDF)</span>
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="page-x flex flex-col py-3">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: '/', hash: `#${item.id}` }}
                  className="flex items-baseline gap-3 py-3 font-serif text-3xl"
                >
                  <span className="font-mono text-xs text-ink-faint">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-line pt-4">
              <a
                href={profile.cv.href}
                download={profile.cv.fileName}
                className="inline-flex items-center gap-2 py-2 text-sm font-medium text-ink"
              >
                <Download size={16} aria-hidden="true" />
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
