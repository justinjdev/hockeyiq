import { comparisonMetas, lessons, playMetas } from '#lib/content/registry.ts';
import { lessonMeta } from '#lib/content/meta.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
	plays: playMetas,
	lessons: lessons.map(lessonMeta),
	comparisons: comparisonMetas
});
