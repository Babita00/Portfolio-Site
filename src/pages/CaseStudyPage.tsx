import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../types/project';
import { getProject } from '../utils/projects';
import { stackEntries } from '../utils/stack';
import { usePageMeta } from '../hooks/usePageMeta';
import { ProjectMeta } from '../components/projects/ProjectMeta';
import { ProjectPreview } from '../components/projects/ProjectPreview';
import { Reveal } from '../components/ui/Reveal';
import { SiteLinkItem } from '../components/ui/SiteLinkItem';
import { StackGroups } from '../components/ui/StackGroups';
import { NotFoundPage } from './NotFoundPage';

export function CaseStudyPage() {
  const { slug = '' } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFoundPage />;
  return <CaseStudy project={project} />;
}

function CaseStudy({ project }: { project: Project }) {
  usePageMeta(`${project.title} — Case study · Babita Awasthi`, project.tagline);

  const position = projects.indexOf(project);
  const index = String(position + 1).padStart(2, '0');
  const next = projects[(position + 1) % projects.length];
  const [leadPreview, ...morePreviews] = project.previews;

  const sections: Array<{ title: string; content: ReactNode }> = [
    {
      title: 'Overview',
      content: <p className="text-xl leading-relaxed text-ink sm:text-2xl">{project.overview}</p>,
    },
    {
      title: 'Problem & users',
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-ink-soft">{project.problem}</p>
          <div>
            <h3 className="label">Built for</h3>
            <BulletList items={project.users} className="mt-4" />
          </div>
        </div>
      ),
    },
  ];

  if (project.platforms) {
    sections.push({
      title: 'Two platforms, one system',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          {project.platforms.map((platform) => (
            <div key={platform.name} className="rounded-lg border border-line bg-paper-card p-6">
              <h3 className="font-serif text-3xl">{platform.name}</h3>
              <div className="mt-2">
                <SiteLinkItem site={platform.site} />
              </div>
              <p className="mt-5 text-ink-soft">{platform.purpose}</p>
              <p className="mt-4 text-sm">
                <span className="label mr-2 text-ink">Users</span>
                {platform.audience}
              </p>
              <BulletList items={platform.features} className="mt-4" />
            </div>
          ))}
        </div>
      ),
    });
  }

  sections.push(
    { title: 'My role', content: <BulletList items={project.responsibilities} large /> },
    {
      title: 'Features & workflows',
      content: (
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div key={feature.title} className="border-t border-line pt-4">
              <dt className="font-medium">{feature.title}</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">{feature.description}</dd>
            </div>
          ))}
        </dl>
      ),
    },
    { title: 'Technology', content: <StackGroups stack={project.stack} /> },
    { title: 'Frontend architecture', content: <BulletList items={project.frontend} /> },
  );

  if (project.backend.length > 0) {
    sections.push({ title: 'Backend & data', content: <BulletList items={project.backend} /> });
  }

  sections.push({
    title: 'Challenges & decisions',
    content: (
      <ol className="space-y-8">
        {project.decisions.map((item, decisionIndex) => (
          <li key={item.challenge} className="grid gap-3 border-t border-line pt-5 md:grid-cols-2 md:gap-10">
            <p className="font-serif text-2xl leading-snug">
              <span className="mr-3 font-mono text-xs text-accent">{String(decisionIndex + 1).padStart(2, '0')}</span>
              {item.challenge}
            </p>
            <p className="leading-relaxed text-ink-soft">
              <span className="label mb-2 block text-ink">Decision</span>
              {item.decision}
            </p>
          </li>
        ))}
      </ol>
    ),
  });

  if (project.outcomes.length > 0) {
    sections.push({ title: 'Outcomes', content: <BulletList items={project.outcomes} large /> });
  }

  if (morePreviews.length > 0) {
    sections.push({
      title: 'Interface',
      content: (
        <div className="grid gap-10 md:grid-cols-2">
          {morePreviews.map((preview) => (
            <ProjectPreview key={preview.caption} preview={preview} showCaption />
          ))}
        </div>
      ),
    });
  }

  sections.push({
    title: 'Links',
    content: (
      <div className="flex flex-col gap-4">
        {project.sites.map((site) => (
          <SiteLinkItem key={site.href} site={site} prefix="Live site" />
        ))}
        {project.repository ? (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
          >
            <Github size={15} aria-hidden="true" />
            Source code on GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <p className="text-sm text-ink-muted">Source code is private.</p>
        )}
      </div>
    ),
  });

  return (
    <article>
      <header className="relative border-b border-line">
        <div className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <div className="page-x relative pb-12 pt-28 sm:pt-32">
          <Link
            to={{ pathname: '/', hash: '#work' }}
            className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            All work
          </Link>

          <ProjectMeta project={project} index={index} className="mt-12" />
          <h1 className="mt-5max-w-5xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{project.tagline}</p>

          <dl className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem label="Role">{project.role}</MetaItem>
            <MetaItem label="Context">
              {project.context === 'Data Construct' ? 'Team project at Data Construct Pvt. Ltd.' : 'Independent build, end to end'}
            </MetaItem>
            <MetaItem label={project.sites.length > 1 ? 'Live sites' : 'Live site'}>
              <span className="flex flex-col gap-1.5">
                {project.sites.map((site) => (
                  <SiteLinkItem key={site.href} site={site} />
                ))}
              </span>
            </MetaItem>
            <MetaItem label="Core stack">
              <span className="flex flex-col gap-1.5">
                {stackEntries(project.stack, 3).map(([layer, items]) => (
                  <span key={layer}>
                    <span className="text-ink-muted">{layer}:</span> {items.slice(0, 3).join(', ')}
                  </span>
                ))}
              </span>
            </MetaItem>
          </dl>
        </div>
      </header>

      <div className="page-x py-12 sm:py-16">
        <Reveal>
          <ProjectPreview preview={leadPreview} eager showCaption />
        </Reveal>
      </div>

      <div className="page-x pb-24">
        {sections.map((section, sectionIndex) => (
          <Reveal key={section.title}>
            <section
              className="grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
              aria-labelledby={`section-${sectionIndex}`}
            >
              <h2 id={`section-${sectionIndex}`} className="label lg:col-span-3">
                <span className="text-ink">({String(sectionIndex + 1).padStart(2, '0')})</span> {section.title}
              </h2>
              <div className="lg:col-span-9">{section.content}</div>
            </section>
          </Reveal>
        ))}
      </div>

      <nav className="border-t border-ink" aria-label="Next case study">
        <Link to={`/work/${next.slug}`} className="group page-x flex flex-col gap-3 py-14 sm:py-20">
          <span className="label">Next case study</span>
          <span className="flex items-center justify-between gap-6 font-serif text-4xl leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-6xl">
            {next.title}
            <ArrowRight
              className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2 sm:h-12 sm:w-12"
              aria-hidden="true"
            />
          </span>
        </Link>
      </nav>
    </article>
  );
}

function MetaItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="mt-2 text-sm leading-snug text-ink">{children}</dd>
    </div>
  );
}

function BulletList({ items, large = false, className = '' }: { items: string[]; large?: boolean; className?: string }) {
  return (
    <ul className={`space-y-3 leading-relaxed text-ink-soft ${large ? 'text-lg' : ''} ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
