<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { data, children } = $props();
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-shell">
	<Header links={data.navLinks} />

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="container">
			<p>Study Guide — © {year} — Svelte 5</p>
		</div>
	</footer>
</div>

<style>
	.app-shell {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto; /* Header, Body, Footer */
	}

	main {
		padding: var(--space-10) var(--space-4);
	}

	footer {
		text-align: center;
		padding: var(--space-4) 0;
		opacity: 0.7;
		font-size: 0.9rem;
	}

	div.container {
		max-width: 1024px;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
