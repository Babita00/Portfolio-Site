import type { ProjectStack } from '../../types/project';
import { stackEntries } from '../../utils/stack';
import { TechList } from './TechList';

interface StackGroupsProps {
  stack: ProjectStack;
  /** Show only the first N layers (Frontend, Backend, Data, …). */
  limit?: number;
}

/** A project's technologies grouped by layer, so frontend and backend work are both visible at a glance. */
export function StackGroups({ stack, limit }: StackGroupsProps) {
  return (
    <dl className="space-y-3">
      {stackEntries(stack, limit).map(([layer, items]) => (
        <div key={layer} className="grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-3">
          <dt className="label pt-1.5 text-ink">{layer}</dt>
          <dd>
            <TechList items={items} label={`${layer} technologies`} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
