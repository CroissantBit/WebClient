<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ToastType, addToast } from '$lib/components/Toaster.svelte';
	import { ArrowLeft, Github, Loader } from 'lucide-svelte';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { getPreviousUrl } from '$lib/util';

	export let data: LayoutData;
	if (data.currentConnection === undefined) {
		addToast({
			data: {
				type: ToastType.Warning,
				title: 'Not connected',
				description: 'Auto connect from URL failed. Please enter server IP and Port manually.'
			}
		});
		goto('/');
	}

	let socket: WebSocket | undefined;
	$: if (data.currentConnection) ({ socket } = data.currentConnection);
	$: state = socket?.readyState;
	$: previousPage = getPreviousUrl($page.url);

	onMount(() => {
		if (socket === undefined) return;
		addToast({
			data: {
				title: 'Connecting',
				description: `Connecting to WebSocket server ${socket?.url}`,
				type: ToastType.Info
			}
		});

		socket.addEventListener('open', () => {
			addToast({
				data: {
					title: 'Connected',
					description: `Connected to WebSocket server ${socket?.url}`,
					type: ToastType.Success
				}
			});
			// Needed due to Svelte not updating state
			state = socket?.readyState;
		});

		socket.addEventListener('close', () => {
			addToast({
				data: {
					title: 'Disconnected',
					description: `Disconnected from WebSocket server ${socket?.url}`,
					type: ToastType.Error
				}
			});
			state = socket?.readyState;
		});

		return () => {
			socket?.close();
		};
	});
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

{#if state === WebSocket.OPEN}
	<slot />
{:else if state === WebSocket.CONNECTING}
	<div class="grid h-full w-full place-items-center text-white">
		<span class="flex flex-row items-center justify-center gap-4 rounded bg-smore-900 p-4 text-xl">
			<Loader class="h-8 w-8 animate-spin fill-white" />Connecting...
		</span>
	</div>
{:else}
	<div class="grid h-full w-full place-items-center text-white">
		<span class="flex flex-row items-center justify-center gap-4 rounded bg-smore-900 p-4 text-xl">
			<Loader class="h-8 w-8 text-red-500" />Disconnected
		</span>
	</div>
{/if}
