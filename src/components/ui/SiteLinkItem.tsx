import { ArrowUpRight } from 'lucide-react';
import type { SiteLink } from '../../types/project';

interface SiteLinkItemProps {
  site: SiteLink;
  prefix?: string;
}

/** A live-site link, or a plain-text note when the site is not currently reachable so we never render a broken link. */
export function SiteLinkItem({ site, prefix }: SiteLinkItemProps) {
  const text = prefix ? `${prefix}: ${site.label}` : site.label;

  if (!site.available) {
    return (
      <span className="inline-flex items-center gap-2 text-sm text-ink-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" aria-hidden="true" />
        {text} <span className="label normal-case tracking-normal">(currently offline)</span>
      </span>
    );
  }

  return (
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
      {text}
      <ArrowUpRight
        size={15}
        className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
