import type { JSX } from 'astro/jsx-runtime';
import { getCollection, type CollectionEntry } from 'astro:content';

import type { Tag } from './types';

export const isSameSite = (href: string) => !href.startsWith('http');

export const createCrumb = (icon: JSX.Element, text: string) =>
	({
		text,
		icon
	}) satisfies Tag;

export const isHidden = (article: CollectionEntry<'articles'>) =>
	article.data.hidden && !import.meta.env.DEV;

/** Visible articles, newest first. */
export const getVisibleArticles = async () => {
	const articles = await getCollection('articles', (article) => !isHidden(article));
	return articles.sort((a, b) => b.data.created.getTime() - a.data.created.getTime());
};
