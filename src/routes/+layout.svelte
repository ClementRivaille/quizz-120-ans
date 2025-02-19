<script lang="ts">
	let { children } = $props();
</script>

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

			> * {
				flex: 1;
			}
		}
	}
</style>
