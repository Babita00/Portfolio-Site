import { getTechIcon } from '../../utils/techIcons';

interface TechLogoProps {
  name: string;
  size?: number;
}

/** Brand logo in its own colour, or a neutral outline icon for concepts without a logo. Decorative: the name is always shown beside it. */
export function TechLogo({ name, size = 16 }: TechLogoProps) {
  const techIcon = getTechIcon(name);

  if (techIcon.kind === 'generic') {
    const Icon = techIcon.icon;
    return <Icon size={size} strokeWidth={1.75} className="shrink-0 text-ink-soft" aria-hidden="true" />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${techIcon.icon.hex}`}
      className="shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <path d={techIcon.icon.path} />
    </svg>
  );
}
