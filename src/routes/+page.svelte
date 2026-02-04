<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	let count = $state(0);
</script>

<div class="page-container">
	<Card title="Svelte 5 Demo">
		<p>Standardized tokens and standalone modules.</p>

		{#snippet footer()}
			<div class="actions" role="group" aria-label="Counter actions">
				<button class="primary" onclick={() => count++}>
					Clicked {count}
					{count === 1 ? 'time' : 'times'}
				</button>

				<button class="ghost" onclick={() => (count = 0)} aria-label="Reset counter">Reset</button>
			</div>
		{/snippet}
	</Card>
</div>

<style>
	.page-container {
		display: grid;
		place-items: center; /* Robust modern centering */
		height: 100%;
	}

	.actions {
		display: grid;
		grid-template-columns: repeat(2, minmax(9rem, 1fr));
		gap: var(--space-4);
		width: 100%;
	}

	@media (max-width: 640px) {
		.actions {
			grid-template-columns: 1fr;
		}
	}
</style>
