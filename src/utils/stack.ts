import type { ProjectStack, StackLayer } from '../types/project';

/** Display order of stack layers; cards show the first three, case studies show all. */
export const stackLayers: readonly StackLayer[] = ['Frontend', 'Backend', 'Data', 'AI & media', 'Cloud & tooling'];

/** Present layers of a stack in display order, optionally limited to the first `limit` layers. */
export function stackEntries(stack: ProjectStack, limit: number = stackLayers.length): Array<[StackLayer, string[]]> {
  return stackLayers.slice(0, limit).flatMap((layer) => {
    const items = stack[layer];
    return items && items.length > 0 ? [[layer, items] as [StackLayer, string[]]] : [];
  });
}
