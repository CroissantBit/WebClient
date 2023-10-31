<script lang="ts">
	import { BarChart2, Play } from 'lucide-svelte';
	import type { VideoMetadata } from '$lib/types/metadata';

	export let video: VideoMetadata;

	function formatTime(duration: number): string {
		let min = Math.floor(duration / 60000);
		let sec = (duration % 60000) / 1000;
		return `${min}:${sec < 10 ? '0' : ''}${sec.toFixed(0)}`;
	}
</script>

<div
	class="flex max-w-md flex-row items-center gap-2 rounded bg-smore-900 p-1 hover:bg-lavender-900"
>
	<div
		class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-smore-950 hover:bg-lapis-500"
	>
		<Play class="ml-1 h-5 w-5 fill-white text-white" />
	</div>
	<div class="flex-1">
		<h2 class="mb-1 text-bellflower-100">{video.title}</h2>
		<div class="flex flex-row items-center gap-1 text-xs text-slate-500">
			<BarChart2 class="h-3 w-3 " />
			<span>{video.bpm} BPM</span>
		</div>
	</div>
	<span class="text-xs text-slate-500">
		{formatTime(video.duration)}
	</span>
</div>
