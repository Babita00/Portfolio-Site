import { Building2, User } from 'lucide-react';
import type { Project } from '../../types/project';

const contextStyles = {
  'Independent build': { icon: User, className: 'border-line-strong bg-paper-card text-ink-soft' },
  'Data Construct': { icon: Building2, className: 'border-accent/25 bg-accent-soft text-accent' },
} as const;

interface ProjectMetaProps {
  project: Project;
  index: string;
  className?: string;
}

// Number, category and context as three visually distinct pieces: a solid index chip,
// a mono category label and a sans context pill.
export function ProjectMeta({ project, index, className = '' }: ProjectMetaProps) {
  const { icon: Icon, className: contextClassName } = contextStyles[project.context];

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <span className="inline-flex h-6 min-w-[1.75rem] items-center justify-center rounded bg-ink px-1.5 font-mono text-[0.6875rem] font-medium text-paper">
        <span className="sr-only">Project </span>
        {index}
      </span>
      <span className="label text-ink">{project.category}</span>
      <span className="h-3.5 w-px bg-line-strong" aria-hidden="true" />
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${contextClassName}`}
      >
        <Icon size={12} aria-hidden="true" />
        {project.context}
      </span>
    </div>
  );
}
