<script>
	import { previousConnections } from '$lib/client/stores/previousConnections';
	import ServerInput from '$lib/components/ServerInput.svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-12">
	<div class="justify-start">
		<h1 class="text-center text-4xl font-bold text-bellflower-100">Croissant Bit</h1>
		<p class="text-body font-medium text-slate-400">
			Visit <a href="https://github.com/CroissantBit" class="text-bellflower-500">
				github.com/CroissantBit
			</a> for more info
		</p>
	</div>

	<div>
		<h2 class="mb-2 text-lg text-bellflower-200">New Connection</h2>
		<p class="m-1 text-center text-xs text-slate-400">Enter server IP and Port</p>
		<ServerInput />
		<h2 class="mb-2 mt-5 text-lg text-bellflower-200">Previous Connections</h2>
		{#if $previousConnections.length === 0}
			<p class="m-1 text-center text-xs text-slate-400">No previous connections</p>
		{:else}
			{#each $previousConnections as url}
				<ServerInput {url} />
			{/each}
		{/if}
	</div>
</div>
