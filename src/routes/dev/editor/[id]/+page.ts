import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async ({ params }) => {
	// Statically false in production builds, so the full registry never ships to the client.
	if (import.meta.env.DEV) {
		const { getPlay } = await import('#lib/content/registry.ts');
		const play = getPlay(params.id);
		if (!play) error(404, 'Play not found');
		return { play };
	}
	error(404, 'Not found');
};
