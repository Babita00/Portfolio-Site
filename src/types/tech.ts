import type { LucideIcon } from 'lucide-react';
import type { SimpleIcon } from 'simple-icons';

/** A brand logo from Simple Icons, or a neutral Lucide icon for concepts without a logo. */
export type TechIcon = { kind: 'brand'; icon: SimpleIcon } | { kind: 'generic'; icon: LucideIcon };
