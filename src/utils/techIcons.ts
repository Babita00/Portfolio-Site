import { Braces } from 'lucide-react';
import { techIcons } from '../data/techIcons';
import type { TechIcon } from '../types/tech';

const fallbackIcon: TechIcon = { kind: 'generic', icon: Braces };

export function getTechIcon(name: string): TechIcon {
  return techIcons[name] ?? fallbackIcon;
}
