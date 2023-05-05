import type { MetadataValues, PostMetadata } from '$routes/page';
import path from 'path';

const getAllPosts = async (withHidden = false) => {
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

export default getAllPosts;
