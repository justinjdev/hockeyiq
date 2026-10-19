import { plays } from '#lib/content/registry.ts';
import { stepIdMap } from '#lib/quiz/progress.ts';
import type { LayoutServerLoad } from './$types';

/** Every page gets the step-id map so saved v1 progress can migrate wherever it is first loaded. */
export const load: LayoutServerLoad = () => ({ stepIds: stepIdMap(plays) });
