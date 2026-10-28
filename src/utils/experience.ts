import { careerStart } from '../data/experience';

/** Whole and half years since careerStart, e.g. "1.5+". */
export function yearsOfExperience(now: Date = new Date()): string {
  const months =
    (now.getFullYear() - careerStart.getFullYear()) * 12 + (now.getMonth() - careerStart.getMonth());
  const halfYears = Math.floor(Math.max(months, 0) / 6) / 2;
  return halfYears >= 1 ? `${halfYears}+` : '<1';
}
