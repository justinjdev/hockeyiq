import { error } from '@sveltejs/kit';
import { getPlay, plays } from '#lib/content/registry.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => plays.map((p) => ({ id: p.id }));

export const load: PageLoad = ({ params }) => {
	const play = getPlay(params.id);
	if (!play) error(404, 'Play not found');
	return { play };
};
