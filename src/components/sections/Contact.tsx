import { ArrowUpRight, Check, Copy, Download, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';
import { Reveal } from '../ui/Reveal';

type CopyState = 'idle' | 'copied' | 'failed';

const channels = [
  { label: 'GitHub', handle: 'Babita00', href: profile.github, icon: Github },
  { label: 'LinkedIn', handle: 'in/babita-asth', href: profile.linkedin, icon: Linkedin },
] as const;

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  useEffect(() => {
    if (copyState === 'idle') return;
    const timeout = window.setTimeout(() => setCopyState('idle'), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  return (
    <section id="contact" className="page-x py-24 sm:py-32" aria-labelledby="contact-title">
      <Reveal className="border-t border-ink pt-6">
        <p className="label">
          <span className="text-ink">(05)</span> Contact
        </p>
        <h2 id="contact-title" className="mt-10 max-w-4xl font-serif text-5xl leading-[1] tracking-tight sm:text-7xl lg:text-8xl">
          Have a product that needs building?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          I’m open to full stack roles and freelance projects. Email is the quickest way to reach me.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label">Email</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 break-all font-serif text-2xl text-ink transition-colors hover:text-accent sm:text-4xl"
            >
              <Mail size={28} className="hidden shrink-0 sm:block" aria-hidden="true" />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-3 py-2 text-xs font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              {copyState === 'copied' ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              {copyState === 'copied' ? 'Copied' : 'Copy'}
            </button>
            <span role="status" aria-live="polite" className="text-xs text-ink-muted">
              {copyState === 'copied' && <span className="sr-only">Email address copied to clipboard</span>}
              {copyState === 'failed' && 'Copy failed. Select the address instead.'}
            </span>
          </div>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello from your portfolio')}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Write me an email
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <ul className="divide-y divide-line border-y border-line lg:col-span-5">
          {channels.map(({ label, handle, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} aria-hidden="true" />
                  <span className="font-medium">{label}</span>
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-ink-muted group-hover:text-accent">
                  {handle}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv.href}
              download={profile.cv.fileName}
              className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-3">
                <FileText size={18} aria-hidden="true" />
                <span className="font-medium">CV</span>
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-ink-muted group-hover:text-accent">
                PDF
                <Download size={14} className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </span>
              <span className="sr-only">(download)</span>
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
