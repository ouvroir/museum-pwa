<script lang="ts">
	import { siteDescription } from '$lib/config'

	let { data } = $props();
	console.log(data);
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<section>
	<header>
		<h1>Itineraries</h1>
	</header>

{#each data.posts as { slug, title, date }}
	<article>
		<p>Title : {title}</p>
		<p>Date : {date}</p>
		<p><a href="/itineraries/{slug}">{slug}</a></p>
	</article>
	<hr/>
{/each}
</section>
