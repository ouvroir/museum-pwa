import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeSlug from "rehype-slug";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: [".md", ".svx"],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			// rehypePlugins: [
			//	rehypeSlug,
			//	rehypeAutolinkHeadings,
			//],
		})],
	extensions: ['.svelte', '.svx', '.md'],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				"*",
				"/api/posts/page/*",
				"/blog/category/*/page/",
				"/blog/category/*/page/*",
				"/blog/category/page/",
				"/blog/category/page/*",
				"/blog/page/",
				"/blog/page/*",
			],
		},
	},
};

export default config;
