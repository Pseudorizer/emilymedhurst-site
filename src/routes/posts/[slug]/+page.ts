import type { ComponentType } from 'node_modules/svelte/internal';
import type { MetadataValues } from '$routes/page';
import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export const load: import('./$types').PageLoad = (async ({ params }) => {
	const { slug } = params;

	let post;

	try {
		post = await import(`../../../content/posts/${slug}.svx`);
	} catch (e) {
		throw error(404, 'Post not found');
	}

	const { default: page, metadata } = post as {
		metadata: MetadataValues;
		default: ComponentType | null;
	};

	if (!page) {
		throw error(404, 'Post not found');
	}

	return {
		metadata,
		page
	};
});