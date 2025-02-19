export type Orientation = 'fab' | 'isa' | 'none';

export interface QuizzAnswer {
	label: string;
	value: Orientation;
}

export interface QuizzQuestion {
	question: string;
	answers: QuizzAnswer[];
}
