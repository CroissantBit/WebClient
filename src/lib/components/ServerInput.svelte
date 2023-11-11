<script lang="ts">
	import { goto } from '$app/navigation';
	import { ArrowRight } from 'lucide-svelte';

	export let server: string = '';
	let inputFailedValidation = false;

	function connect() {
		if (server === '' || !server.includes(':')) return (inputFailedValidation = true);
		let parts = server.split(':');
		if (parts.length === 0 || Number.isInteger(Number(parts[1])) === false)
			return (inputFailedValidation = true);

		goto(`/client?ip=${parts[0]}&port=${parts[1]}`);
	}
</script>

<div id="server-input" class="flex gap-2">
	<input
		bind:value={server}
		data-failed-validation={inputFailedValidation}
		type="text"
		class="flex-1 rounded border bg-smore-900 p-2 text-white data-[failed-validation=true]:border-red-500"
		placeholder="localhost:443"
	/>
	<button
		on:click={connect}
		class="flex w-14 items-center justify-center rounded border border-lapis-500 bg-lapis-500 outline-none focus-within:bg-transparent hover:bg-transparent"
	>
		<ArrowRight class="h-5 w-5 text-white" />
	</button>
</div>
