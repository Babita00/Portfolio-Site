import type { ReactNode } from 'react';

interface BrowserFrameProps {
  address: string;
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ address, children, className = '' }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-line bg-paper-card shadow-[0_1px_0_rgba(24,24,27,0.04),0_28px_56px_-32px_rgba(24,24,27,0.35)] transition-colors duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-paper-card px-3 py-2 sm:px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded bg-paper-deep px-3 py-1 text-center font-mono text-[0.6875rem] text-ink-muted">
          {address}
        </div>
      </div>
      {children}
    </div>
  );
}
