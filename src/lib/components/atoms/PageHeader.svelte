<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PageHeaderProps {
		children: Snippet;
	}

	const { children }: PageHeaderProps = $props();
</script>

<h1>{@render children()}</h1>

<style>
	h1 {
		margin: 0;
		padding: 0;
		font-weight: 800;
		font-size: 2rem;
		display: inline-block;
	}
</style>
