import { projects } from '../../data/projects';
import { ProjectCard, type ProjectCardLayout } from '../projects/ProjectCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

// Projects without a layout here (Graha Mantra, iCaptain) share the closing two-column grid.
const layoutBySlug: Record<string, ProjectCardLayout> = {
  'international-education': 'combined',
  'interview-for-you': 'feature',
  prepbox: 'row',
  'hei-nexus': 'row-reverse',
};

const numbered = projects.map((project, index) => ({ project, index: String(index + 1).padStart(2, '0') }));
const showcased = numbered.filter(({ project }) => layoutBySlug[project.slug]);
const gridded = numbered.filter(({ project }) => !layoutBySlug[project.slug]);

export function Work() {
  return (
    <section id="work" className="page-x py-24 sm:py-32" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        index="01"
        label="Selected work"
        title="Real products, from solo builds to team platforms."
        intro="Each project links to a case study covering the problem, who it serves, what I was responsible for and the engineering decisions behind it."
      />

      <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
        {showcased.map(({ project, index }) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={index} layout={layoutBySlug[project.slug]} />
          </Reveal>
        ))}

        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          {gridded.map(({ project, index }, position) => (
            <Reveal key={project.slug} delay={position * 0.08} className="flex">
              <ProjectCard project={project} index={index} layout="grid" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
