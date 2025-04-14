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
    <h1>Page Heading with <i>Italics</i> and <u>Underline</u></h1>
    <p>Page Subheading with <mark>highlighting</mark></p>
    <br>
    <p><a href="#e"><i>Italic Link Button</i></a><a href="#e"><b>Bold Link Button &rarr;</b></a></p>
</header>

<main>
    {@render children()}
</main>

<Footer/>