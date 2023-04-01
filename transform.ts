import path from 'path';
import glob from 'glob';
import type { EntriesTransformFunction } from 'vite-plugin-svelte-entries-generator';

const CONTENT_PATH = 'src/content/posts/*.svx';

const getFilePaths = async (path: string) => {
	try {
		return await glob(path);
	} catch (e) {
		console.error(`Failed to read ${path}`);
		return [];
	}
};

const transformByFilename: EntriesTransformFunction = async (apiPath, repoRoot) => {
	const fullPath = path.resolve(repoRoot, CONTENT_PATH);

	const fullPaths = await getFilePaths(fullPath);

	return fullPaths.map((filePath) => {
		const extension = path.extname(filePath);
		const fileName = path.basename(filePath, extension);
		return apiPath.replace('[slug]', fileName);
	});
};

export default transformByFilename;
