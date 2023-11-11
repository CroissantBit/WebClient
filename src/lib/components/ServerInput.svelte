<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ArrowRight } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	export let url: string = '';
	let inputFailedValidation = false;

	function navigate() {
		if (url === '' || !url.includes(':')) return (inputFailedValidation = true);
		let finalUrl = new URL($page.url + 'client');
		finalUrl.searchParams.set('server', url);
		goto(finalUrl);
	}
</script>

<div id="server-input" class="flex gap-2">
	<input
		bind:value={url}
		data-failed-validation={inputFailedValidation}
		type="text"
		class="flex-1 rounded border bg-smore-900 p-2 text-white data-[failed-validation=true]:border-red-500"
		placeholder="localhost:443"
	/>
	<button
		on:click={navigate}
		class="flex w-14 items-center justify-center rounded border border-lapis-500 bg-lapis-500 outline-none focus-within:bg-transparent hover:bg-transparent"
	>
		<ArrowRight class="h-5 w-5 text-white" />
	</button>
</div>
