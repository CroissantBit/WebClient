<script>
	import { ArrowRight } from 'lucide-svelte';

	export let readonly = false;
</script>

<div id="server-input" class="flex gap-2">
	<input
		{readonly}
		type="text"
		class=" w-60 flex-1 rounded bg-smore-900 p-2 text-white"
		placeholder="localhost:443"
	/>
	<a
		href="/"
		class="flex w-14 items-center justify-center rounded border border-lapis-500 bg-lapis-500 hover:bg-transparent"
	>
		<ArrowRight class="h-5 w-5 text-white" />
	</a>
</div>
