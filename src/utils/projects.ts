import { projects } from '../data/projects';
import type { Project } from '../types/project';

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
