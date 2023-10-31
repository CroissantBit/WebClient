<script lang="ts">
	import Song from '$lib/components/VideoItem.svelte';
	import { VideoMetadata } from '$lib/types/metadata';

	let video = VideoMetadata.create({ id: 1, title: 'Song Name', bpm: 100, duration: 582261 });
</script>

<Song {video} />
