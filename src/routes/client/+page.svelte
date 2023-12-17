<script lang="ts">


	import {onMount} from "svelte";
	import axios from "axios";
	import SongListItem from "$lib/components/SongListItem.svelte";
	import UploadDialog from "$lib/components/UploadDialog.svelte";
	
	let songs : any = []
	
	onMount(async ()=> {
		try {
			const response = await axios.get("https://localhost:7178/songs")
	
			console.log(response.data)
			songs = response.data;
	
		}
		catch (e) {
			console.log(e.message);
		}
		
	})

	let show = false
	function startAddingEventListener()
	{
		console.log("should change")
		show = true
	}

</script>

<menu class="flex h-10 flex-row gap-4 text-slate-400">
	{#if songs.length > 0}
		<ul class="grid grid-cols-2 gap-4 w-full">
			{#each songs as song (song.Id)}
				
				<SongListItem  songname={song.Name} bpm={song.Bpm} laenge={song.Duration} count={song.Id}></SongListItem>
			{/each}
		</ul>
	{:else}
		<p>No songs available.</p>
	{/if}
	
	<UploadDialog on:click={startAddingEventListener} show={show}></UploadDialog>
	
	
</menu>


