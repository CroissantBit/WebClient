<script lang="ts">
	import { BarChart2, Play } from 'lucide-svelte';
	import type { croissantbit } from '$lib/types/bundle';

	// Temporary
	export let song: croissantbit.Ping;
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
		<h2 class="mb-1 text-bellflower-100">Song Name</h2>
		<div class="flex flex-row items-center gap-1 text-xs text-slate-500">
			<BarChart2 class="h-3 w-3 " />
			<span>100 BPM</span>
		</div>
	</div>
	<span class="text-xs text-slate-500">3:31</span>
</div>
