import type { EntryGenerator } from './$types';
import path from 'path';

export const prerender = true;

export const entries = (() => {
	const mdModules = import.meta.glob('../../../content/posts/*.svx');

	return Object.keys(mdModules).map((filePath) => {
		const extension = path.extname(filePath);
		const fileName = path.basename(filePath, extension);
		return { slug: fileName };
	});
}) satisfies EntryGenerator;
