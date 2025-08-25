import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import OG from './_OG';

type Props = InferGetStaticPropsType<typeof getStaticPaths>;
const font = await fetch(
	'https://cdn.jsdelivr.net/fontsource/fonts/atkinson-hyperlegible@latest/latin-700-normal.woff'
);
const fontBuffer = await font.arrayBuffer();

export const GET: APIRoute<Props> = async ({ props }) => {
	const svg = await satori(OG({ title: props.article.data.title }) as any, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: 'Atkinson Hyperlegible',
				data: fontBuffer,
				weight: 700,
				style: 'normal'
			}
		]
	});

	const png = sharp(Buffer.from(svg)).png();
	const response = await png.toBuffer();

	// @ts-expect-error - I don't know why this fails in astro check
	return new Response(response, {
		status: 200,
		headers: {
			'Content-Type': 'image/png'
		}
	});
};

export const getStaticPaths = (async () => {
	const articles = await getCollection('articles');

	return articles.map((article) => ({
		params: { id: article.slug },
		props: { article }
	}));
}) satisfies GetStaticPaths;
