<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Croissant Bit</title>
</svelte:head>

<main class="m-5">
	<slot />
</main>
