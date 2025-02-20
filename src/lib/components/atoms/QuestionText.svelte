<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<h2 class="question-text">{@render children()}</h2>

<style>
	.question-text {
		color: var(--text-color);
		margin: 0;
		padding: 0;
		font-weight: 800;
		font-size: 1.7rem;
		display: inline-block;
	}
</style>
