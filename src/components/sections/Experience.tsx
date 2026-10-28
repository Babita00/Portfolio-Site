import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { education, experience } from '../../data/experience';
import { projects } from '../../data/projects';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { SiteLinkItem } from '../ui/SiteLinkItem';

const independentProjects = projects.filter((project) => project.context === 'Independent build');

export function Experience() {
  return (
    <section id="experience" className="page-x py-24 sm:py-32" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" index="03" label="Experience" title="Where the work happened." />

      <ol className="mt-14">
        {experience.map((entry) => (
          <li key={entry.organization}>
            <Reveal className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <p className="font-mono text-xs text-ink-muted">{entry.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{entry.organization}</h3>
                <p className="mt-1 text-sm text-ink-muted">{entry.location}</p>
              </div>

              <div className="lg:col-span-9">
                <p className="flex flex-wrap items-center gap-2 text-sm font-medium">
                  {entry.progression.map((title, index) => (
                    <span key={title} className="flex items-center gap-2">
                      {index > 0 && <ArrowRight size={14} className="text-accent" aria-label="then" />}
                      <span className={index === entry.progression.length - 1 ? 'text-ink' : 'text-ink-muted'}>{title}</span>
                    </span>
                  ))}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{entry.summary}</p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {entry.projects.map((project) => (
                    <div key={project.slug} className={project.points.length === 1 ? 'md:col-span-2' : undefined}>
                      <Link to={`/work/${project.slug}`} className="group inline-flex items-center gap-2 font-medium transition-colors hover:text-accent">
                        {project.name}
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                      <ul className="mt-3 space-y-2.5 text-[0.9375rem] leading-snug text-ink-soft">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-[0.5em] h-px w-3 shrink-0 bg-ink-faint" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {entry.review && (
                  <div className="mt-10 rounded-lg border border-line bg-paper-card p-5 sm:p-6">
                    <h4 className="font-medium">{entry.review.title}</h4>
                    <p className="mt-1.5 text-[0.9375rem] leading-snug text-ink-soft">{entry.review.description}</p>
                    <ul className="mt-5 grid gap-5 md:grid-cols-2">
                      {entry.review.systems.map((system) => (
                        <li key={system.site.href} className="border-t border-line pt-4">
                          <p className="font-medium">{system.name}</p>
                          <p className="mt-1 text-sm text-ink-muted">{system.client}</p>
                          <div className="mt-2">
                            <SiteLinkItem site={system.site} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}

        <li>
          <Reveal className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-ink-muted">Ongoing</p>
              <h3 className="mt-2 text-xl font-semibold">Independent work</h3>
              <p className="mt-1 text-sm text-ink-muted">Solo builds, end to end</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-9">
              {independentProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group block h-full rounded-md border border-line p-4 transition-colors hover:border-ink"
                  >
                    <p className="font-medium group-hover:text-accent">{project.title}</p>
                    <p className="mt-1.5 text-sm leading-snug text-ink-muted">{project.category}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </li>

        <li>
          <Reveal className="grid gap-6 border-y border-line py-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-ink-muted">{education.period}</p>
              <h3 className="mt-2 text-xl font-semibold">Education</h3>
            </div>
            <div className="lg:col-span-9">
              <p className="font-medium">{education.degree}</p>
              <p className="mt-1 text-ink-soft">{education.school}</p>
            </div>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
