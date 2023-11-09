<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ArrowRight } from 'lucide-svelte';

	export let url: string = '';

	function navigate() {
		if (url === '' || !url.includes(':')) return;
		let finalUrl = new URL($page.url + 'client');
		finalUrl.searchParams.set('server', url);
		goto(finalUrl);
	}
</script>

<div id="server-input" class="flex gap-2">
	<input
		bind:value={url}
		type="text"
		class="flex-1 rounded bg-smore-900 p-2 text-white"
		placeholder="localhost:443"
	/>
	<button
		on:click={navigate}
		class="flex w-14 items-center justify-center rounded border border-lapis-500 bg-lapis-500 outline-none focus-within:bg-transparent hover:bg-transparent"
	>
		<ArrowRight class="h-5 w-5 text-white" />
	</button>
</div>
