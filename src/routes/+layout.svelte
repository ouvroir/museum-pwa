<script lang="ts">
    import { siteTitle, siteURL } from '$lib/config';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    let { children } = $props();
</script>

<svelte:head>
    <link
		rel="alternate"
		type="application/rss+xml"
		title={siteTitle}
		href="http://{siteURL}/api/rss.xml"
	/>
</svelte:head>

<header>
    <Nav />
</header>

<main>
    {@render children()}
</main>

<Footer/>