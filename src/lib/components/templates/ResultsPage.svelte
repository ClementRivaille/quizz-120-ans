<script lang="ts">
	import { STORE } from '$lib/quizz-store.svelte';
	import { RESULTS } from '$lib/quizz-values';
	import { fly } from 'svelte/transition';
	import PageHeader from '../atoms/PageHeader.svelte';
	import { PAGE_TRANSITION_DURATION, TRANSITION_HEIGHT } from '$lib/transitions';
	import Paragraph from '../atoms/Paragraph.svelte';

	const finalOrientation = STORE.getResult();
	const result = RESULTS[finalOrientation];
</script>

<div
	class="results"
	in:fly={{
		y: TRANSITION_HEIGHT,
		duration: PAGE_TRANSITION_DURATION,
		delay: PAGE_TRANSITION_DURATION
	}}
>
	<PageHeader>{result.header}</PageHeader>
	<Paragraph>{result.description}</Paragraph>
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
