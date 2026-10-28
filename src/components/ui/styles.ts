const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-200';

export const buttonClasses = {
  primary: `${buttonBase} bg-ink text-paper hover:bg-accent`,
  secondary: `${buttonBase} border border-line-strong text-ink hover:border-ink`,
} as const;

export const textLinkClasses =
  'inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent';
