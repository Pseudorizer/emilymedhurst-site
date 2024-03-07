import type { JSX } from 'astro/jsx-runtime';
import type { Tag } from './types';

export const isSameSite = (href: string) => !href.startsWith('http');

export const createCrumb = (icon: JSX.Element, text: string) =>
	({
		text,
		icon
	}) satisfies Tag;
