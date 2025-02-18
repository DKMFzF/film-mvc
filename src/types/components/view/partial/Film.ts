export interface FilmData {
	rating: number;
	director: string;
	tags: string[];
	title: string;
	description: string;
}

export interface FilmSettings {
	rating: string;
	director: string;
	tags: string;
	title: string;
	description: string;
	
	compactClass: string;
	tagsSeparator: string;
	isCompact: boolean;
}
