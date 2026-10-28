import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-x flex flex-col gap-3 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Designed and built with React, TypeScript and Tailwind CSS</p>
      </div>
    </footer>
  );
}
