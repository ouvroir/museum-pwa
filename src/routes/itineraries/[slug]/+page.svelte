<script lang="ts">
	// import type { PageData } from './$types';
	// import PageHead from '$lib/components/PageHead.svelte';
	// import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	// import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	let { data } = $props();
	// export let data: PageData;
	
	// type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	// $: component = data.component as unknown as C;
</script>


<svelte:component this="{data.component}"/>
