<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonLinkProps {
		children: Snippet;
		onclick?: () => void;
		selected?: boolean;
		disabled?: boolean;
	}
	const { children, onclick, selected, disabled }: ButtonLinkProps = $props();
</script>

<button {onclick} class={['button-answer', { selected, disabled }]} {disabled}>
	{@render children()}
</button>

<style>
	.button-answer {
		--button-color: #bb1f43;
		color: black;
		background-color: transparent;
		border: 4px solid var(--button-color);
		text-align: center;
		padding: 0.7em;
		border-radius: 50px;
		font-size: 1.4rem;
		transition: all 0.2s;
		outline: none;

		&.selected {
			background-color: var(--button-color);
			color: white;
			font-weight: bold;
		}
		&.disabled {
			opacity: 0.5;
			pointer-events: none;
		}

		@media screen and (min-width: 900px) {
			font-size: 1rem;
		}
	}
</style>
