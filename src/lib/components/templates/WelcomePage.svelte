<script lang="ts">
	import { STORE } from '$lib/quizz-store.svelte';
	import ButtonLink from '../atoms/ButtonLink.svelte';
	import PageHeader from '../atoms/PageHeader.svelte';

	const onclick = () => {
		console.log('G2NAILE');
		STORE.start();
	};
</script>

<div class="welcome">
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
