<script lang="ts">
	import { STORE } from '$lib/quizz-store.svelte';
	import { RESULTS } from '$lib/quizz-values';
	import PageHeader from '../atoms/PageHeader.svelte';

	const finalOrientation = STORE.getResult();
	const result = RESULTS[finalOrientation];
</script>

<div class="results">
	<PageHeader>{result.header}</PageHeader>
	<div>{result.description}</div>
</div>

<style>
	.results {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.2em;
		text-align: center;
	}
</style>
