import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  id?: string;
}

export function SectionHeading({ index, label, title, intro, id }: SectionHeadingProps) {
  return (
    <Reveal className="grid gap-6 border-t border-ink pt-6 lg:grid-cols-12 lg:gap-8">
      <p className="label lg:col-span-3">
        <span className="text-ink">({index})</span> {label}
      </p>
      <div className="lg:col-span-9">
        <h2 id={id} className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
      </div>
    </Reveal>
  );
}
