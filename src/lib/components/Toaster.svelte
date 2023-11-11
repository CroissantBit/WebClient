<script lang="ts" context="module">
	export enum ToastType {
		Success = 'border-green-500',
		Error = 'border-red-500',
		Warning = 'border-orange-500',
		Info = 'border-blue-500'
	}

	export type ToastData = {
		title: string;
		description: string;
		type: ToastType;
	};

	const {
		elements: { content, title, description, close },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>();

	export const addToast = helpers.addToast;
	export const updateToast = helpers.updateToast;
	export const removeToast = helpers.removeToast;
</script>

<script lang="ts">
	import { createToaster, melt } from '@melt-ui/svelte';
	import { X } from 'lucide-svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
</script>

<div use:portal class="fixed bottom-0 right-0 m-2 flex flex-col items-end gap-2">
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, x: '100%' }}
			out:fly={{ duration: 150, x: '100%' }}
			class="relative max-w-xs rounded border-l-4 bg-smore-900 p-2 text-white {data.type}"
		>
			<div class="mr-2 p-2">
				<h3 use:melt={$title(id)} class="text-sm font-bold">
					{data.title}
				</h3>
				<div use:melt={$description(id)} class="text-xs">
					{data.description}
				</div>
			</div>
			<button
				use:melt={$close(id)}
				class="absolute right-1 top-1 rounded p-[0.2rem] text-bellflower-100 hover:bg-lavender-900 hover:text-red-500"
				aria-label="close notification"
			>
				<X class="h-3 w-3" />
			</button>
		</div>
	{/each}
</div>
