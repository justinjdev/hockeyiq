import { error } from '@sveltejs/kit';
import { dev } from '$app/env';
import { getPlay } from '#lib/content/registry.ts';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = ({ params }) => {
	if (!dev) error(404, 'Not found');
	const play = getPlay(params.id);
	if (!play) error(404, 'Play not found');
	return { play };
};
