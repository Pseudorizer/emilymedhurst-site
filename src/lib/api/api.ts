import type { MetadataValues, PostMetadata } from 'src/routes/page';

const getAllPosts = async () => {
	const mdModules = import.meta.glob('../../content/posts/*.svx');

	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = /(?<slug>[\w-]+)\.svx$/gim.exec(path)?.groups?.slug;
			const { metadata } = (await mdModules[path]()) as { metadata: MetadataValues };
			return { ...metadata, created: new Date(metadata.created), slug } as PostMetadata;
		})
	);

	posts.sort((a, b) => b.created.getTime() - a.created.getTime());

	return posts;
};

export default getAllPosts;
