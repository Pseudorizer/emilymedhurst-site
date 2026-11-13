import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '@lib/site';
import { getVisibleArticles } from '@lib/utils';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
	if (!context.site) {
		throw new Error('`site` must be set in astro.config.mjs for the RSS feed');
	}

	const articles = await getVisibleArticles();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.created,
			description: article.data.description,
			link: `/blog/${article.id}`
		}))
	});
};
