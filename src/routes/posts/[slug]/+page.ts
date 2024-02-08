import type { ComponentType } from 'node_modules/svelte/internal';
import type { MetadataValues } from '$routes/page';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;

	let post;

	try {
		post = await import(`../../../content/posts/${slug}.svx`);
	} catch (e) {
		error(404, 'Post not found');
	}

	const { default: page, metadata } = post as {
		metadata: MetadataValues;
		default: ComponentType | null;
	};

	if (!page) {
		error(404, 'Post not found');
	}

	return {
		metadata,
		page
	};
}) satisfies PageLoad;
