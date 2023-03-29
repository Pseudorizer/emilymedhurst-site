import getAllPosts from '$lib/api/api';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts = await getAllPosts();

	return { posts };
}) satisfies PageLoad;
