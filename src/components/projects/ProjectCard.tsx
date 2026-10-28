import { ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { SiteLinkItem } from '../ui/SiteLinkItem';
import { StackGroups } from '../ui/StackGroups';
import { ProjectMeta } from './ProjectMeta';
import { ProjectPreview } from './ProjectPreview';

export type ProjectCardLayout = 'feature' | 'row' | 'row-reverse' | 'combined' | 'grid';

interface ProjectCardProps {
  project: Project;
  index: string;
  layout: ProjectCardLayout;
}

export function ProjectCard({ project, index, layout }: ProjectCardProps) {
  const titleId = `${project.slug}-title`;
  const caseStudyPath = `/work/${project.slug}`;

  const header = (
    <div>
      <ProjectMeta project={project} index={index} />
      <h3
        id={titleId}
        className={`mt-4 font-serif leading-[1.02] tracking-tight ${
          layout === 'grid' ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'
        }`}
      >
        <Link to={caseStudyPath} className="transition-colors hover:text-accent">
          {project.title}
        </Link>
      </h3>
    </div>
  );

  const highlights = (
    <ul className="space-y-2.5 text-[0.9375rem] leading-snug text-ink-soft">
      {(layout === 'grid' ? project.highlights.slice(0, 2) : project.highlights).map((highlight) => (
        <li key={highlight} className="flex gap-3">
          <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
          {highlight}
        </li>
      ))}
    </ul>
  );

  const keyFacts = (
    <ul
      className="grid gap-4 border-y border-line py-4"
      style={{ gridTemplateColumns: `repeat(${project.keyFacts.length}, minmax(0, 1fr))` }}
      aria-label="Key facts"
    >
      {project.keyFacts.map((fact) => (
        <li key={fact.label}>
          <p className="font-serif text-2xl leading-none tracking-tight text-ink sm:text-3xl">{fact.value}</p>
          <p className="mt-1.5 text-xs leading-snug text-ink-muted">{fact.label}</p>
        </li>
      ))}
    </ul>
  );

  const role = (
    <p className="text-sm text-ink-soft">
      <span className="label mr-2 text-ink">Role</span>
      {project.role}
    </p>
  );

  const actions = (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
      <Link
        to={caseStudyPath}
        className="group/cta inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
      >
        View case study
        <ArrowRight size={16} className="transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
        <span className="sr-only">: {project.title}</span>
      </Link>
      {layout !== 'combined' && project.sites.map((site) => <SiteLinkItem key={site.href} site={site} />)}
      {project.repository && (
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          <Github size={15} aria-hidden="true" />
          Source
          <span className="sr-only">code for {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );

  const previewLink = (previewIndex: number, eager = false, frameAspect?: string) => (
    <Link to={caseStudyPath} tabIndex={-1} aria-hidden="true" className="block">
      <ProjectPreview preview={project.previews[previewIndex]} eager={eager} frameAspect={frameAspect} />
    </Link>
  );

  if (layout === 'feature') {
    return (
      <article className="group" aria-labelledby={titleId}>
        {previewLink(0, true)}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {header}
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink">{project.tagline}</p>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="leading-relaxed text-ink-soft">{project.cardSummary}</p>
            {keyFacts}
            {role}
            {highlights}
            <StackGroups stack={project.stack} limit={3} />
            {actions}
          </div>
        </div>
      </article>
    );
  }

  if (layout === 'combined' && project.platforms) {
    return (
      <article className="group" aria-labelledby={titleId}>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">{header}</div>
          <p className="leading-relaxed text-ink-soft lg:col-span-5 lg:pt-8">{project.cardSummary}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.platforms.map((platform, platformIndex) => (
            <div key={platform.name}>
              {previewLink(platformIndex, false, '2.2 / 1')}
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">{platform.name}</p>
                <SiteLinkItem site={platform.site} />
              </div>
              <p className="mt-1 text-sm text-ink-muted">{platform.purpose}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            {keyFacts}
            {role}
            {highlights}
          </div>
          <div className="space-y-6 lg:col-span-5">
            <StackGroups stack={project.stack} limit={3} />
            {actions}
          </div>
        </div>
      </article>
    );
  }

  if (layout === 'grid') {
    return (
      <article className="group flex flex-col" aria-labelledby={titleId}>
        {previewLink(0)}
        <div className="mt-6 flex flex-1 flex-col gap-5">
          {header}
          <p className="leading-relaxed text-ink-soft">{project.cardSummary}</p>
          {keyFacts}
          {highlights}
          <StackGroups stack={project.stack} limit={3} />
          <div className="mt-auto">{actions}</div>
        </div>
      </article>
    );
  }

  const reversed = layout === 'row-reverse';
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12" aria-labelledby={titleId}>
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>{previewLink(0)}</div>
      <div className={`space-y-6 lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        {header}
        <p className="leading-relaxed text-ink-soft">{project.cardSummary}</p>
        {keyFacts}
        {role}
        {highlights}
        <StackGroups stack={project.stack} limit={3} />
        {actions}
      </div>
    </article>
  );
}
