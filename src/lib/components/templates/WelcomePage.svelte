<script lang="ts">
	import { STORE } from '$lib/quizz-store.svelte';
	import { fly } from 'svelte/transition';
	import ButtonLink from '../atoms/ButtonLink.svelte';
	import PageHeader from '../atoms/PageHeader.svelte';
	import { PAGE_TRANSITION_DURATION, TRANSITION_HEIGHT } from '$lib/transitions';
	import Paragraph from '../atoms/Paragraph.svelte';
	import { QUIZZ } from '$lib/quizz-values';

	const nbQuestions = QUIZZ.length;
	const onclick = () => {
		STORE.start();
	};
</script>

<div class="welcome" out:fly={{ y: -TRANSITION_HEIGHT, duration: PAGE_TRANSITION_DURATION }}>
	<PageHeader>Quel Pasquet-Rivaille es-tu ?</PageHeader>
	<Paragraph
		>Grâce à ce test de personnalité, tu sauras en {nbQuestions} questions si tu es un Fakir ou une Babouche.
	</Paragraph>
	<ButtonLink {onclick}>C'est parti</ButtonLink>
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
