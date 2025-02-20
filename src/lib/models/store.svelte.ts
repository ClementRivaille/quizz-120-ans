import type { Orientation, QuizzQuestion } from './quizz';

export class QuizzState {
	private questions: QuizzQuestion[];
	private currentQuestionIndex: number = $state(0);
	private score: OrientationScore = $state({ fab: 0, isa: 0 });
	private status: 'not-started' | 'started' | 'finished' = $state('not-started');

	constructor(questions: QuizzQuestion[]) {
		this.questions = questions;
	}

	get currentQuestion() {
		return this.questions[this.currentQuestionIndex];
	}
	get currentIndex() {
		return this.currentQuestionIndex;
	}
	get quizzStatus() {
		return this.status;
	}
	get currentTheme() {
		if (this.status === 'not-started') return 'default';
		else if (this.status === 'finished') return 'end';
		return this.currentQuestion.theme ?? 'default';
	}

	public start() {
		this.status = 'started';
	}

	public answer(answer: Orientation) {
		if (answer !== 'none') {
			this.score[answer]++;
		}
	}

	public next() {
		if (this.currentQuestionIndex < this.questions.length - 1) {
			this.currentQuestionIndex++;
		} else {
			this.status = 'finished';
		}
	}

	public getResult(): Orientation {
		if (this.score.fab === this.score.isa) {
			return 'none';
		} else {
			return this.score.fab > this.score.isa ? 'fab' : 'isa';
		}
	}

	get scoreDebug() {
		return JSON.stringify(this.score);
	}
}

type OrientationScore = { [orientation in 'fab' | 'isa']: number };
