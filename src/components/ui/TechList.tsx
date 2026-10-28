import { TechLogo } from './TechLogo';

interface TechListProps {
  items: readonly string[];
  label?: string;
}

export function TechList({ items, label = 'Technologies' }: TechListProps) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-1.5 rounded-md border border-line bg-paper-card px-2.5 py-1.5 text-xs font-medium text-ink-soft"
        >
          <TechLogo name={item} size={14} />
          {item}
        </li>
      ))}
    </ul>
  );
}
