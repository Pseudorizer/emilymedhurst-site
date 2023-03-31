import getAllPosts from '$lib/api/api';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await getAllPosts();

	return json(allPosts);
};
