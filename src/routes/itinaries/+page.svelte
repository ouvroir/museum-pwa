<script>
	import { siteDescription } from '$lib/config'

	let { data } = $props();
	console.log(data);
</script>


<svelte:head>
	<title>Itinaries</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>Itinaries</h1>


{#each data.itinaries as { slug, title, date }}
	<article>
		<p>Title : {title}</p>
		<p>Date : {date}</p>
		<p><a href="itinaries/{slug}">{slug}</a></p>
	</article>
{/each}
