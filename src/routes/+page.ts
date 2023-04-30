import type { PostMetadata } from '$routes/page';

export const load: import('./$types').PageLoad = (async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const posts = (await res.json()) as PostMetadata[];

	return { posts };
});
