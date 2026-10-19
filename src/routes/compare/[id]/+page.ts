import { error } from '@sveltejs/kit';
import { comparisons, getComparison, getPlay } from '#lib/content/registry.ts';
import type { EntryGenerator, PageLoad } from './$types';

// 'auto' rather than the layout's true: with no comparisons authored yet, no entry exists and
// 'true' would fail the build as an unseen route.
export const prerender = 'auto';

export const entries: EntryGenerator = () => comparisons.map((c) => ({ id: c.id }));

export const load: PageLoad = ({ params }) => {
	const comparison = getComparison(params.id);
	const a = comparison && getPlay(comparison.a);
	const b = comparison && getPlay(comparison.b);
	if (!comparison || !a || !b) error(404, 'Comparison not found');
	return { comparison, a, b };
};
