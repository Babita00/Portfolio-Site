import type { SiteLink } from './project';

export interface ExperienceProject {
  name: string;
  slug: string;
  points: string[];
}

/** A system I reviewed and tested rather than built, so it links to the live site instead of a case study. */
export interface ReviewedSystem {
  name: string;
  client: string;
  site: SiteLink;
}

/** Code review and QA work done for an organization, listed separately from projects that were built. */
export interface Review {
  title: string;
  description: string;
  systems: ReviewedSystem[];
}

export interface ExperienceEntry {
  organization: string;
  location: string;
  period: string;
  progression: string[];
  summary: string;
  projects: ExperienceProject[];
  review?: Review;
}
