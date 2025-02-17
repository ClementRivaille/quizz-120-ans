<script>
	import ButtonLink from '$lib/components/atoms/ButtonLink.svelte';
	import PageHeader from '$lib/components/atoms/PageHeader.svelte';
</script>

<div class="main">
	<PageHeader>Quel Pasquet-Rivaille es-tu ?</PageHeader>
	<ButtonLink>Faisons le test !</ButtonLink>
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
