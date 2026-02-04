import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		navLinks: [
			{ name: 'Home', path: '/' },
			{ name: 'Docs', path: '/docs' },
			{ name: 'Components', path: '/components' }
		]
	};
};
