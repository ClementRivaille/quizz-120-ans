<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<p class="paragraph">{@render children()}</p>

<style>
	.paragraph {
		font-size: 1.3em;
		margin: 0;
	}
</style>
