import { error } from '@sveltejs/kit';
import { getLesson, getPlay, lessons } from '#lib/content/registry.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => lessons.map((l) => ({ id: l.id }));

export const load: PageLoad = ({ params }) => {
	const lesson = getLesson(params.id);
	if (!lesson) error(404, 'Lesson not found');
	const examples = lesson.examplePlays.flatMap((id) => {
		const play = getPlay(id);
		return play ? [{ id: play.id, title: play.title }] : [];
	});
	return { lesson, examples };
};
