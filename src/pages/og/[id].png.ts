import { getVisibleArticles } from '@lib/utils';
import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from 'astro';
import { experimental_getFontFileURL, fontData } from 'astro:assets';
import satori from 'satori';
import sharp from 'sharp';

import OG from './_OG';

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

// The bold Atkinson file from the Fonts API config. satori can't read woff2,
// which is why the config also asks for woff.
const fontPath = fontData['--font-atkinson']
	.find((font) => font.weight === '700' && font.style === 'normal')
	?.src.find((source) => source.format === 'woff')?.url;

if (!fontPath) {
	throw new Error(
		'Bold woff file for --font-atkinson not found; check `fonts` in astro.config.mjs'
	);
}

const fontBuffer = await fetch(experimental_getFontFileURL(fontPath)).then((res) =>
	res.arrayBuffer()
);

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

	return new Response(response, {
		status: 200,
		headers: {
			'Content-Type': 'image/png'
		}
	});
};

export const getStaticPaths = (async () => {
	const articles = await getVisibleArticles();

	return articles.map((article) => ({
		params: { id: article.id },
		props: { article }
	}));
}) satisfies GetStaticPaths;
