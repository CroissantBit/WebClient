<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
	<h1 class="text-4xl text-white">{$page.status}</h1>
	<h1 class="text-xl text-bellflower-200">{$page.error?.message}</h1>
	<a
		href="/"
		class="flex h-16 items-center justify-center rounded border border-lapis-500 bg-lapis-500 p-4 text-white outline-none focus-within:bg-transparent hover:bg-transparent"
	>
		Return to Home
		<ArrowRight class="ml-2 h-5 w-5" />
	</a>
</div>
