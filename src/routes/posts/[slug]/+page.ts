import type { ComponentType } from 'node_modules/svelte/internal';
import type { MetadataValues } from 'src/routes/page';
import type { PageLoad } from './$types';

export const prerender = 'auto';

export const load = (async ({ params }) => {
	const { slug } = params;

	const post = await import(`../../../content/posts/${slug}.svx`);

	const { default: page, metadata } = post as {
		metadata: MetadataValues;
		default: ComponentType | null;
	};

	if (!page) {
		return {
			status: 404
		};
	}

	return {
		metadata,
		page
	};
}) satisfies PageLoad;
