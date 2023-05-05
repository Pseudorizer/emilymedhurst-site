import type { PostMetadata } from '$routes/page';
import type { PageLoad } from '../$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const posts = (await res.json()) as PostMetadata[];

	return { posts };
}) satisfies PageLoad;
