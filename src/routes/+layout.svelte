<script lang="ts">
	import { STORE } from '$lib/quizz-store.svelte';

	let { children } = $props();

	let theme = $derived(STORE.currentTheme);
</script>

<svelte:head>
	<title>Quiz 120 ans</title>
</svelte:head>

<div id="app" class={[theme]}>
	<div class={['content']}>
		{@render children()}
	</div>
</div>

<style>
	:root {
		font-size: 12px;
		font-family: sans;
	}

	@media screen and (min-width: 900px) {
		:root {
			font-size: 20px;
		}

		#app {
			padding: 0px 20px;
		}
	}

	#app {
		--background-color: #9fcce0;
		--text-color: black;
		--selected-text-color: white;
		--button-color: #bb1f43;

		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--background-color);
		padding: 0px 10px;
		overflow-x: hidden;
		transition: background-color 0.6s;

		&.work {
			--background-color: #d1d0aa;
			--text-color: black;
			--selected-text-color: white;
			--button-color: #8d8a5e;
		}
		&.cook {
			--background-color: #f7b75f;
			--text-color: black;
			--selected-text-color: white;
			--button-color: #f71735;
		}
		&.age {
			--background-color: #206767;
			--text-color: white;
			--selected-text-color: black;
			--button-color: #709292;
		}
		&.movie {
			--background-color: #070612;
			--text-color: white;
			--selected-text-color: white;
			--button-color: #544f79;
		}
		&.dance {
			--background-color: #9a1406;
			--text-color: white;
			--selected-text-color: black;
			--button-color: #f00045;
		}
		&.holiday {
			--background-color: #8a7dcf;
			--text-color: black;
			--selected-text-color: white;
			--button-color: #1264ab;
		}
		&.cat {
			--background-color: #d76728;
			--text-color: white;
			--selected-text-color: white;
			--button-color: #913f0e;
		}
		&.guests {
			--background-color: #4d4b3f;
			--text-color: white;
			--selected-text-color: black;
			--button-color: #979476;
		}
		&.radio {
			--background-color: #22546a;
			--text-color: white;
			--selected-text-color: black;
			--button-color: #92a5ad;
		}
		&.tv {
			--background-color: #d3bccc;
			--text-color: black;
			--selected-text-color: white;
			--button-color: #854b6b;
		}
		&.sailing {
			--background-color: #2d628e;
			--text-color: white;
			--selected-text-color: black;
			--button-color: #597e9c;
		}
		&.niniste {
			--background-color: #616250;
			--text-color: white;
			--selected-text-color: black;
			--button-color: #b9be7a;
		}
		&.train {
			--background-color: #f9fbec;
			--text-color: black;
			--selected-text-color: white;
			--button-color: #5d425c;
		}
		&.end {
			--background-color: #bb1f43;
			--text-color: white;
			--selected-text-color: white;
			--button-color: #5d425c;
		}
	}

	:global {
		body {
			display: flex;
			flex-direction: column;
			justify-content: stretch;
			height: 100vh;
			margin: 0;
			padding: 0;
		}

		* {
			box-sizing: border-box;
		}
	}
</style>
