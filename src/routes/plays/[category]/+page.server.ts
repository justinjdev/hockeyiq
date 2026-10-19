import { error } from '@sveltejs/kit';
import { CATEGORIES, CATEGORY_LABELS, playMetas } from '#lib/content/registry.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => CATEGORIES.map((category) => ({ category }));

export const load: PageServerLoad = ({ params }) => {
	const category = CATEGORIES.find((c) => c === params.category);
	if (!category) error(404, 'Category not found');
	return {
		category,
		label: CATEGORY_LABELS[category],
		plays: playMetas.filter((p) => p.category === category)
	};
};
