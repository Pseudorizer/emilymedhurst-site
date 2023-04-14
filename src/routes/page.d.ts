export interface MetadataValues {
	title: string;
	summary: string;
	created: string;
	tags?: string[];
	hidden?: boolean;
}

export interface PostMetadata extends MetadataValues {
	slug: string;
}
