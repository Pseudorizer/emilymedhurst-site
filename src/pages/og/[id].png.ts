import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';

type Props = InferGetStaticPropsType<typeof getStaticPaths>;
const font = await fetch(
	'https://cdn.jsdelivr.net/fontsource/fonts/atkinson-hyperlegible@latest/latin-700-normal.woff'
);
const fontBuffer = await font.arrayBuffer();

export const GET: APIRoute<Props> = async ({ props }) => {
	const svg = await satori(
		{
			type: 'div',
			props: {
				children: [
					{
						type: 'p',
						props: {
							style: { fontSize: '35px', textAlign: 'left', margin: '25px' },
							children: 'emilymedhurst.gay'
						}
					},
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								position: 'absolute',
								height: '100%',
								width: '100%',
								fontSize: '60px',
								textAlign: 'center'
							},
							children: props.article.data.title
						}
					}
				],
				style: {
					backgroundColor: '#191716',
					color: '#f5f5f5',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					position: 'relative'
				}
			}
		},
		{
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
		}
	);

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
	const articles = await getCollection('articles');

	return articles.map((article) => ({
		params: { id: article.slug },
		props: { article }
	}));
}) satisfies GetStaticPaths;
