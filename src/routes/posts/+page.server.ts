import { getAllPosts } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const posts = await getAllPosts();

	return { posts };
}) satisfies PageServerLoad ;
