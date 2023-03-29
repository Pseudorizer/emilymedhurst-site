export interface MetadataValues {
	title: string;
	summary: string;
	created: string;
	tags?: string[];
}

export type PostMetadata = {
	slug: string;
	created: Date;
} & Omit<MetadataValues, 'created'>;
