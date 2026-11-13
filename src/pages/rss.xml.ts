import rss from '@astrojs/rss';
import { getVisibleArticles } from '@lib/utils';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
	const articles = await getVisibleArticles();
	return rss({
		// `<title>` field in output xml
		title: 'Emily Medhurst',
		// `<description>` field in output xml
		description: 'A trans software developer doing things',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site as URL,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.created,
			description: article.data.description,
			link: `/blog/${article.id}`
		}))
	});
};
