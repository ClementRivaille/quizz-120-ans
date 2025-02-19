import type { Orientation, QuizzQuestion, QuizzResult } from './models/quizz';

export const QUIZZ: QuizzQuestion[] = [
	{
		question: 'What is your favorite color?',
		answers: [
			{ label: 'Red', value: 'fab' },
			{ label: 'Blue', value: 'isa' },
			{ label: 'Green', value: 'none' }
		]
	},
	{
		question: 'What is your favorite animal?',
		answers: [
			{ label: 'Dog', value: 'fab' },
			{ label: 'Cat', value: 'isa' },
			{ label: 'Bird', value: 'none' }
		]
	}
];

export const RESULTS: { [key in Orientation]: QuizzResult } = {
	fab: { header: 'You are fabulous!', description: 'You are a fabulous person!' },
	isa: { header: 'You are isabelline!', description: 'You are an isabelline person!' },
	none: { header: 'You are neutral!', description: 'You are a neutral person!' }
};
