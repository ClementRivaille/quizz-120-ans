export type Orientation = 'fab' | 'isa' | 'none';

export interface QuizzAnswer {
	label: string;
	value: Orientation;
}

export interface QuizzQuestion {
	question: string;
	answers: QuizzAnswer[];
	theme: string;
}

export interface QuizzResult {
	header: string;
	description: string;
}
