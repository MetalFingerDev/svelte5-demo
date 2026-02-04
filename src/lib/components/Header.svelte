<script lang="ts">
	import { resolve } from '$app/paths';
	import { isExternalLink, normalizeForResolve } from '$lib/utils/paths';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	let { links = [] }: { links: App.NavLink[] } = $props();
	let searchTerm = $state('');
</script>

<header class="main-header">
	<nav class="nav-links" aria-label="Navigation">
		{#each links as link (link.path)}
			{#if isExternalLink(link.path)}
				<a href={link.path} target="_blank" rel="noopener external">{link.name}</a>
			{:else}
				<a href={resolve(normalizeForResolve(link.path))}>{link.name}</a>
			{/if}
		{/each}
	</nav>

	<div class="search-container">
		<input type="search" placeholder="Search docs..." bind:value={searchTerm} />
	</div>

	<div class="header-actions">
		<button class="primary">Get Started</button>
		<ThemeSwitcher />
	</div>
</header>

<style>
	.main-header {
		display: grid;
		grid-template-columns: 1fr auto 1fr; /* Svelte.dev standard */
		align-items: center;
		padding: 0 var(--space-10);
		height: 64px;
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
	}

	.nav-links {
		display: flex;
		gap: var(--space-4);
	}
	.nav-links a {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 500;
	}
	.header-actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
