import { error } from '@sveltejs/kit';
import { getLesson, getPlay, plays } from '#lib/content/registry.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => plays.map((p) => ({ id: p.id }));

export const load: PageServerLoad = ({ params }) => {
	const play = getPlay(params.id);
	if (!play) error(404, 'Play not found');
	const concepts = play.keyConcepts.map((id) => ({ id, title: getLesson(id)?.title ?? id }));
	return { play, concepts };
};
