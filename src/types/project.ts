/** A real screenshot of a live product. */
export interface Preview {
  src: string;
  alt: string;
  caption: string;
  address: string;
  /** Intrinsic pixel size; the preview keeps this aspect ratio instead of cropping. */
  width: number;
  height: number;
}

export interface SiteLink {
  label: string;
  href: string;
  /** False when the site did not respond at the time of writing; rendered as plain text, not a link. */
  available: boolean;
}

export interface Platform {
  name: string;
  site: SiteLink;
  audience: string;
  purpose: string;
  features: string[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface Decision {
  challenge: string;
  decision: string;
}

export type ProjectContext = 'Independent build' | 'Data Construct';

export type StackLayer = 'Frontend' | 'Backend' | 'Data' | 'AI & media' | 'Cloud & tooling';

export type ProjectStack = Partial<Record<StackLayer, string[]>>;

/** A short, scannable fact for non-technical readers, e.g. { value: '50+', label: 'institutions' }. */
export interface KeyFact {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  context: ProjectContext;
  tagline: string;
  cardSummary: string;
  role: string;
  keyFacts: KeyFact[];
  highlights: string[];
  stack: ProjectStack;
  sites: SiteLink[];
  repository?: string;
  previews: Preview[];
  overview: string;
  problem: string;
  users: string[];
  responsibilities: string[];
  platforms?: Platform[];
  features: Feature[];
  frontend: string[];
  backend: string[];
  decisions: Decision[];
  outcomes: string[];
}
