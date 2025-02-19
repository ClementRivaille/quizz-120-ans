<script lang="ts">
	import { STORE } from '$lib/quizz-store.svelte';
	import { fly } from 'svelte/transition';
	import ButtonLink from '../atoms/ButtonLink.svelte';
	import PageHeader from '../atoms/PageHeader.svelte';
	import { PAGE_TRANSITION_DURATION, TRANSITION_HEIGHT } from '$lib/transitions';

	const onclick = () => {
		console.log('G2NAILE');
		STORE.start();
	};
</script>

<div class="welcome" out:fly={{ y: -TRANSITION_HEIGHT, duration: PAGE_TRANSITION_DURATION }}>
	<PageHeader>Quel Pasquet-Rivaille es-tu ?</PageHeader>
	<ButtonLink {onclick}>Faisons le test !</ButtonLink>
</div>

<style>
	.welcome {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1.2em;
		text-align: center;
		padding: 0px 10px;
	}
</style>
