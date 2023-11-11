<script lang="ts">
	import '../app.css';
	import Toaster from '$lib/components/Toaster.svelte';
</script>

<svelte:head>
	<title>Croissant Bit</title>
</svelte:head>

<Toaster />

<main class="mx-auto h-[100vh] max-w-7xl p-4">
	<slot />
</main>
