<script lang="ts">
	import '../app.css';
	import Toaster from '$lib/components/Toaster.svelte';
	import { connectionState } from '$lib/client/stores/connectionState';
</script>

<svelte:head>
	<title>
		CroissantBit - {$connectionState === WebSocket.OPEN ? 'Connected' : 'Disconnected'}
	</title>
</svelte:head>

<Toaster />

<main class="mx-auto h-[100vh] max-w-7xl p-4">
	<slot />
</main>
