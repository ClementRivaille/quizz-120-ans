<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonLinkProps {
		children: Snippet;
		onclick?: () => void;
	}
	const { children, onclick }: ButtonLinkProps = $props();
</script>

<button {onclick} class="button-link">{@render children()}</button>

<style>
	.button-link {
		background-color: #bb1f43;
		color: white;
		font-weight: bold;
		border: none;
		text-align: center;
		padding: 0.6em;
		border-radius: 99px;
		font-size: 1.4rem;
		transition:
			background-color 0.2s,
			text-shadow 0.2s;
		text-shadow: hsla(0 0% 0% / 46%) 2px 2px 1px;

		&:focus {
			background-color: #15344e;
			text-shadow: none;
		}

		@media screen and (min-width: 900px) {
			font-size: 1rem;
		}
	}
</style>
