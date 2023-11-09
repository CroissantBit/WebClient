<script>
	import { page } from '$app/stores';
	import { ArrowLeft, Github } from 'lucide-svelte';

	$: previousPage = new URL($page.url.toString().split('/').slice(0, -1).join('/'));
</script>

<nav class="mb-2 flex flex-row items-center justify-start gap-2">
	<a href={previousPage.toString()} class="text-slate-400 hover:text-bellflower-100">
		<ArrowLeft class="h-5 w-5" />
	</a>
	<h1 class="text-2xl font-bold text-bellflower-100">Main Page</h1>
	<a href="https://github.com/croissantbit" target="_blank">
		<Github class="h-5 w-5 text-slate-600" />
	</a>
</nav>

<slot />
