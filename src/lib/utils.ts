import { getCollection, type CollectionEntry } from 'astro:content';

export const isExternalLink = (href: string) => href.startsWith('http');

/**
 * `target` and `rel` for an `<a>`: external links open in a new tab without
 * leaking the referrer. Internal links get neither attribute.
 */
export const linkAttributes = (href: string, rel?: string) => {
	const external = isExternalLink(href);
	const relValue = [external && 'noreferrer noopener', rel].filter(Boolean).join(' ');

	return {
		target: external ? '_blank' : undefined,
		rel: relValue || undefined
	};
};

export const isHidden = (article: CollectionEntry<'articles'>) =>
	article.data.hidden && !import.meta.env.DEV;

const ordinalRules = new Intl.PluralRules('en-GB', { type: 'ordinal' });
const ordinalSuffixes: Partial<Record<Intl.LDMLPluralRule, string>> = {
	one: 'st',
	two: 'nd',
	few: 'rd'
};
const postedDateFormat = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	hourCycle: 'h23'
});

/** Formats a date like "7th March 2024 at 16:22", in the build machine's time zone. */
export const formatPostedDate = (date: Date) => {
	const part = (type: Intl.DateTimeFormatPartTypes) =>
		postedDateFormat.formatToParts(date).find((p) => p.type === type)?.value ?? '';
	const day = part('day');
	const suffix = ordinalSuffixes[ordinalRules.select(Number(day))] ?? 'th';

	return `${day}${suffix} ${part('month')} ${part('year')} at ${part('hour')}:${part('minute')}`;
};

/** Visible articles, newest first. */
export const getVisibleArticles = async () => {
	const articles = await getCollection('articles', (article) => !isHidden(article));
	return articles.sort((a, b) => b.data.created.getTime() - a.data.created.getTime());
};
