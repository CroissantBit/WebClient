<script lang="ts">
	import Video from '$lib/components/VideoItem.svelte';
	import { videos } from '$lib/client/stores/videos';
	import { Connection, ConnectionState } from '$lib/client/connection';
	import { onMount } from 'svelte';

	onMount(() => {
		let conn = new Connection('localhost', 8080);
		if (conn.state !== ConnectionState.CONNECTING) {
			return;
		}
	});
</script>

{#each $videos as video (video.id)}
	<Video {video} />
{/each}
