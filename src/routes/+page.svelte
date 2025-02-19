<script lang="ts">
	import QuestionForm from '$lib/components/molecules/QuestionForm.svelte';
	import type { QuizzQuestion } from '$lib/models/quizz';
	import { QUIZZ } from '$lib/quizz-questions';

	const currentQuestion: QuizzQuestion = QUIZZ[0];
</script>

<div class="main">
	<!-- <PageHeader>Quel Pasquet-Rivaille es-tu ?</PageHeader> -->
	<!-- <ButtonLink>Faisons le test !</ButtonLink> -->

	<QuestionForm question={currentQuestion} onAnswer={() => {}} />
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1.2em;
		text-align: center;
		padding: 0px 10px;
	}
</style>
