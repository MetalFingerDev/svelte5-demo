<script lang="ts">
	let theme = $state<'light' | 'dark'>('light');

	$effect(() => {
		if (typeof window === 'undefined') return;
		const stored = localStorage.getItem('theme');
		const resolved =
			stored === 'light' || stored === 'dark'
				? stored
				: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
		if (theme !== resolved) theme = resolved;
		document.documentElement.dataset.theme = resolved;
		localStorage.setItem('theme', resolved);
	});

	function toggleTheme(): void {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}
</script>

<button
	class="theme-toggle"
	aria-pressed={theme === 'dark'}
	aria-label="Toggle color theme"
	onclick={toggleTheme}
>
	{theme === 'dark' ? '🌙' : '☀️'}
</button>

<style>
	/* Minimal component-level spacing, visual states live in global tokens */
	:global(.theme-toggle) {
		font: inherit;
	}
</style>
