<script lang="ts">
	import QuestionForm from '$lib/components/molecules/QuestionForm.svelte';
	import QuizzPage from '$lib/components/templates/QuizzPage.svelte';
	import ResultsPage from '$lib/components/templates/ResultsPage.svelte';
	import WelcomePage from '$lib/components/templates/WelcomePage.svelte';
	import type { QuizzQuestion } from '$lib/models/quizz';
	import { STORE } from '$lib/quizz-store.svelte';
	import { QUIZZ } from '$lib/quizz-values';

	const quizzStatus = $derived(STORE.quizzStatus);
</script>

<div class="main">
	{#if quizzStatus === 'not-started'}
		<WelcomePage />
	{:else if quizzStatus === 'started'}
		<QuizzPage />
	{:else if quizzStatus === 'finished'}
		<ResultsPage />
	{/if}
</div>

<style>
	.main {
		width: 100%;
		height: 100%;
	}
</style>
