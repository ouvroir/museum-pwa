import type { PageLoad } from './$types';
import { slugFromPath } from '$lib/utilities/slugFromPath';

const MAX_POSTS = 10;

export const load: PageLoad = async () => {
	const content = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(content).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.Posts)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: publishedPosts };
};
