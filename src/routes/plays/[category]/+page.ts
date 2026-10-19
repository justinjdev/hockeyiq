import { error } from '@sveltejs/kit';
import { CATEGORY_LABELS, playsByCategory } from '#lib/content/registry.ts';
import type { PlayCategory } from '#lib/content/types.ts';
import type { EntryGenerator, PageLoad } from './$types';

const categories = Object.keys(CATEGORY_LABELS) as PlayCategory[];

export const entries: EntryGenerator = () => categories.map((category) => ({ category }));

export const load: PageLoad = ({ params }) => {
	const category = categories.find((c) => c === params.category);
	if (!category) error(404, 'Category not found');
	return { category, label: CATEGORY_LABELS[category], plays: playsByCategory(category) };
};
