import { QuizzState } from './models/store.svelte';
import { QUIZZ } from './quizz-values';

const STORE = new QuizzState(QUIZZ);

export { STORE };
