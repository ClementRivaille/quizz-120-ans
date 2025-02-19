<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PageHeaderProps {
		children: Snippet;
	}

	const { children }: PageHeaderProps = $props();
</script>

<h1 class="page-header">{@render children()}</h1>

<style>
	.page-header {
		margin: 0;
		padding: 0;
		font-weight: 800;
		font-size: 2rem;
		display: inline-block;
	}
</style>
