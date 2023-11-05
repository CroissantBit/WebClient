<script lang="ts">
	import Video from '$lib/components/VideoItem.svelte';
	import { VideoMetadata } from '$lib/types/metadata';
	import { Connection, registerClient } from '$lib/client/connection';
	import { Ping } from '$lib/types/main';

	let video = VideoMetadata.create({ id: 1, title: 'Song Name', bpm: 100, duration: 582261 });
	//registerClient();

	let conn = new Connection('localhost', 8080);
</script>

<Video {video} />
