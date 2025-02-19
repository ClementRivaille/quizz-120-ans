<script lang="ts">
	import type { Orientation } from '$lib/models/quizz';
	import { STORE } from '$lib/quizz-store.svelte';
	import { PAGE_TRANSITION_DURATION, TRANSITION_HEIGHT } from '$lib/transitions';
	import { sleepMs } from '$lib/utils';
	import QuestionForm from '../molecules/QuestionForm.svelte';
	import { fly } from 'svelte/transition';

	const currentQuestion = $derived(STORE.currentQuestion);
	const questionNumber = $derived(STORE.currentIndex + 1);

	let isTransitioning = $state(false);

	const screenWidth = window.innerWidth;

	const onAnswer = async (answer: Orientation) => {
		STORE.answer(answer);
		await sleepMs(300);
		isTransitioning = true;
	};

	const showNextQuestion = () => {
		STORE.next();
		isTransitioning = false;
	};
</script>

<div
	class="quizz"
	in:fly={{
		y: TRANSITION_HEIGHT,
		duration: PAGE_TRANSITION_DURATION,
		delay: PAGE_TRANSITION_DURATION
	}}
	out:fly={{ y: -TRANSITION_HEIGHT, duration: PAGE_TRANSITION_DURATION }}
>
	{#if !isTransitioning}
		<div
			out:fly={{ x: -screenWidth, duration: 400 }}
			in:fly={{ x: screenWidth, duration: 400, delay: 10 }}
			onoutroend={showNextQuestion}
		>
			<QuestionForm question={currentQuestion} number={questionNumber} {onAnswer} />
		</div>
	{/if}
</div>
