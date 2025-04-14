import type { PageLoad } from '../$types';
import { slugFromPath } from '$lib/utilities/slugFromPath';

const MAX_POSTS = 10;

export const load: PageLoad = async () => {
	const content = import.meta.glob(`/src/itinaries/*.{md,svx,svelte.md}`);

	const contentPromises = Object.entries(content).map(([path, resolver]) =>
		resolver().then(
			(content) =>
				({
					slug: slugFromPath(path),
					...(content as unknown as App.MdsvexFile).metadata
				} as App.Itinaries)
		)
	);

	const contents = await Promise.all(contentPromises);
	const publishedContents = contents.filter((content) => content.published).slice(0, MAX_POSTS);

	publishedContents.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { itinaries: publishedContents };
};
