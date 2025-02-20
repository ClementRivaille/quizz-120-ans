<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Quiz 120 ans</title>
</svelte:head>

<div id="app">
	<div>
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

		:global {
			body {
				padding: 0px 20px;
			}
		}
	}

	#app {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global {
		body {
			background-color: #9fcce0;
			/* background-color: #2c8d1f; */
			display: flex;
			flex-direction: column;
			justify-content: stretch;
			background-color: none;
			height: 100vh;
			padding: 0px 10px;

			> * {
				flex: 1;
			}
		}
	}
</style>
