import type { MetadataValues, PostMetadata } from '$routes/page';

const getAllPosts = async () => {
	const mdModules = import.meta.glob('../../content/posts/*.svx');
	const postFiles = Object.entries(mdModules);

	const posts = await Promise.all(
		postFiles.map(async ([path, resolver]) => {
			const slug = /(?<slug>[\w-]+)\.svx$/gim.exec(path)?.groups?.slug;
			const { metadata } = (await resolver()) as { metadata: MetadataValues };
			return { ...metadata, slug } as PostMetadata;
		})
	);

	posts.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

	return posts;
};

export default getAllPosts;
