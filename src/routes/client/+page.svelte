<script lang="ts">
	import VideoItem from '$lib/components/VideoItem.svelte';
	import UploadDialog from '$lib/components/UploadDialog.svelte';
	import { videos } from '$lib/client/stores/videosList';
	import { Airplay, Grid2X2, List, Search } from 'lucide-svelte';
	import { createToggle, melt } from '@melt-ui/svelte';

	let searchTerm = '';

	$: filteredVideos = $videos.filter((video) =>
		video.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const {
		states: { pressed },
		elements: { root }
	} = createToggle();
</script>

<menu class="flex h-10 flex-row gap-4 text-slate-400">
	<div class="flex flex-1 flex-row items-center rounded bg-smore-900 p-3">
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Search"
			class="w-full bg-inherit text-white outline-none"
		/>
		<Search />
	</div>
	<button
		use:melt={$root}
		class="hidden rounded p-2 outline-none hover:bg-lavender-900 hover:text-bellflower-100 focus:bg-lavender-900 focus:text-bellflower-100 sm:block"
	>
		{#if $pressed}
			<Grid2X2 class="h-6 w-6" />
		{:else}
			<List class="h-6 w-6" />
		{/if}
	</button>
	<UploadDialog />
	<a
		href="/client/devices"
		class="flex items-center rounded p-2 outline-none hover:bg-lavender-900 hover:text-bellflower-100 focus:bg-lavender-900 focus:text-bellflower-100"
	>
		<Airplay class="h-6 w-6" />
	</a>
</menu>

<div
	class:grid={$pressed}
	class:flex={!$pressed}
	class="mt-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] flex-col gap-2"
>
	{#if filteredVideos.length === 0}
		<div class="text-center text-slate-500">
			No videos found. Check your search or try uploading some!
		</div>
	{/if}
	{#each filteredVideos as video (video.id)}
		<VideoItem {video} />
	{/each}
</div>
