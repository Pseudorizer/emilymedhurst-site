import type { JSX } from 'astro/jsx-runtime';
import type { Tag } from './types';
import type { CollectionEntry } from 'astro:content';

export const isSameSite = (href: string) => !href.startsWith('http');

export const createCrumb = (icon: JSX.Element, text: string) =>
	({
		text,
		icon
	}) satisfies Tag;

export const isHidden = (article: CollectionEntry<'articles'>) =>
	article.data.hidden && !import.meta.env.DEV;
