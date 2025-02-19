<script lang="ts">
	import type { Orientation, QuizzAnswer, QuizzQuestion } from '$lib/models/quizz';
	import { fly, slide } from 'svelte/transition';
	import ButtonAnswer from '../atoms/ButtonAnswer.svelte';
	import QuestionText from '../atoms/QuestionText.svelte';

	interface QuizzQuestionProps {
		number?: number;
		question: QuizzQuestion;
		onAnswer: (answer: Orientation) => void;
	}
	const { question, onAnswer, number = 1 }: QuizzQuestionProps = $props();

	let selectedAnswer: Orientation | undefined = $state();
	const isDisabled = (value: Orientation) =>
		selectedAnswer !== undefined && selectedAnswer !== value;

	const onAnswerClick = (answer: QuizzAnswer) => {
		selectedAnswer = answer.value;
		onAnswer(answer.value);
	};
</script>

<div class="quizz-question">
	<QuestionText>{number}. {question.question}</QuestionText>
	<div class="answers">
		{#each question.answers as answer}
			<ButtonAnswer
				onclick={() => onAnswerClick(answer)}
				selected={selectedAnswer === answer.value}
				disabled={isDisabled(answer.value)}
			>
				{answer.label}
			</ButtonAnswer>
		{/each}
	</div>
</div>

<style>
	.quizz-question {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1.3em;
		text-align: center;
		min-width: 80vw;

		.answers {
			display: flex;
			flex-direction: column;
			gap: 0.8em;
		}
	}
</style>
