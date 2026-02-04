<script lang="ts">
	import type { Snippet } from 'svelte';
	let { title, children, footer }: { title?: string; children: Snippet; footer?: Snippet } =
		$props();
</script>

<article class="card">
	{#if title}<h3>{title}</h3>{/if}

	<div class="body">
		{@render children()}
	</div>

	{#if footer}
		<footer class="footer">
			{@render footer()}
		</footer>
	{/if}
</article>

<style>
	.card {
		background: var(--color-surface);
		backdrop-filter: blur(8px);
		padding: var(--space-10);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-card);
		border: 1px solid var(--color-border);
		max-width: 600px;
	}

	.footer {
		margin-top: var(--space-4);
		display: flex;
		justify-content: center;
	}
</style>
