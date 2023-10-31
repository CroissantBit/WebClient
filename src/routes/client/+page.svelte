<script>
	import Song from '$lib/components/Song.svelte';
	import { croissantbit } from '$lib/types/bundle';

	let tempSong = croissantbit.Ping.create();
</script>

<Song song={tempSong} />
