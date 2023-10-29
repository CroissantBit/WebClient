<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="flex w-full flex-col items-center">
	<div>
		<h1 class="text-header text-center text-4xl font-bold text-bellflower-100">Croissant Bit</h1>
		<p class="text-body font-medium text-slate-400">
			Visit <a href="https://github.com/CroissantBit" class="text-bellflower-500">
				github.com/CroissantBit
			</a> for more info
		</p>
	</div>

	<div class="mt-24">
		<h2 class="text-lg text-bellflower-200">New Connection</h2>
		<p class="m-1 text-center text-xs text-slate-400">Enter server IP and Port</p>
		<div class="flex gap-2">
			<input
				type="text"
				class=" w-60 flex-1 rounded bg-smore-900 p-2 text-white"
				placeholder="localhost:443"
			/>
			<button class="w-14 rounded bg-lapis-500">
				<ArrowRight class="mx-auto h-5 w-5 text-white" />
			</button>
		</div>
	</div>
</div>
