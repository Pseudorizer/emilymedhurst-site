import type { MetadataValues, PostMetadata } from '$routes/page';
import { error } from '@sveltejs/kit';
import path from 'path';
import type { ComponentType } from 'svelte';

export const getAllPosts = async (withHidden = false) => {
	const mdModules = import.meta.glob('../../content/posts/*.svx');
	const postFiles = Object.entries(mdModules);

	let posts = await Promise.all(
		postFiles.map(async ([filePath, resolver]) => {
			const extension = path.extname(filePath);
			const slug = path.basename(filePath, extension);
			const { metadata } = (await resolver()) as { metadata: MetadataValues };
			return { ...metadata, slug } as PostMetadata;
		})
	);

	posts.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

	if (!withHidden) {
		posts = posts.filter((post) => !post.hidden);
	}

	return posts;
};

export const getPost = async (slug: string) => {
	let post;

	try {
		post = await import(`../../content/posts/${slug}.svx`);
	} catch (err) {
		error(404, 'Post not found');
	}

	if (!post) {
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
		page,
		metadata
	};
};
