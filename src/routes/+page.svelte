<script lang="ts">
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';
	import axios from "axios";

	onMount(async () => {
		try {
			const response = await axios.get("https://localhost:7178/")
			if (response.status == 200)
			{
				console.log("could connect")
				goto(`/client`);
			}
			console.log("coulnt connect")
		}	
		catch (e) {
			console.log(e)	
		}

		
	});

	function handleReload() {
		window.location.reload(); // Passing true as an argument forces a reload from the server, skipping the cache
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-12">
	<div class="justify-start flex flex-col items-center gap-y-4">
		<h1 class="text-center text-4xl font-bold text-bellflower-100">Croissant Bit</h1>
		<p class="text-body font-medium text-slate-400">
			<span class="text-red-600 text-center">Connection failed. </span>
			<br>
			Make sure to start the server on the port 7178.
			<br>
			Visit <a href="https://github.com/CroissantBit" class="text-bellflower-500">
				github.com/CroissantBit
			</a> for more info
		</p>
		<button on:click={handleReload}  class="bg-gray-600 rounded-full w-48 h-8 text-white font-semibold">
		Try again
		</button>
	</div>

	
	
</div>
