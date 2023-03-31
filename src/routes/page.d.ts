export interface MetadataValues {
	title: string;
	summary: string;
	created: string;
	tags?: string[];
}

export interface PostMetadata extends MetadataValues {
	slug: string;
}
