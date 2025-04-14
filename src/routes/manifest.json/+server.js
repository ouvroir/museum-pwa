export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export const GET = function get({ setHeaders }) {

	const manifest = {
		name: "Museum PWA",
		short_name: "Museum PWA",
		description:
		'SvelteKit MDsvex Museum PWA Starter',
		start_url: '/',
		backgroundColor: '#1b4079',
	    themeColor: '#d62828',
		display: 'standalone',
		icons: [
			{ src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
			{ src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
		],
	};

	setHeaders({
		'content-type': 'application/json',
	});

	return new Response(JSON.stringify(manifest));
};
