<script lang="ts">
	import type { Orientation } from '$lib/models/quizz';
	import { STORE } from '$lib/quizz-store.svelte';
	import QuestionForm from '../molecules/QuestionForm.svelte';

	const currentQuestion = $derived(STORE.currentQuestion);
	const questionNumber = $derived(STORE.currentIndex);

	const onAnswer = (answer: Orientation) => {
		STORE.answer(answer);
		STORE.next();
	};
</script>

<div class="quizz">
	<QuestionForm question={currentQuestion} number={questionNumber} {onAnswer} />
</div>
