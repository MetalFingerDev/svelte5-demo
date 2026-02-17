// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Liveblocks {
			UserMeta: {
				id: Id<'users'>; // Matches your Convex User ID
				info: {
					name: string;
					avatar?: string;
				};
			};
			Presence: {
				cursor: { x: number; y: number } | null;
			};
		}
	}
}

export {};
