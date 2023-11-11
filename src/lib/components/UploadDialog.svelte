<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { Upload, ArrowRight, X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});
</script>

<button
	use:melt={$trigger}
	class="rounded p-2 outline-none hover:bg-lavender-900 hover:text-bellflower-100 focus:bg-lavender-900 focus:text-bellflower-100"
>
	<Upload class="h-6 w-6" />
</button>

<div use:melt={$portalled}>
	{#if $open}
		<div use:melt={$overlay} class="fixed inset-0 z-10 bg-black/50" />
		<div
			class="fixed left-[50%] top-[50%] z-20 max-h-[85vh] w-[90vw]
          max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded bg-smore-950
          p-6"
			transition:fade={{
				duration: 150
			}}
			use:melt={$content}
		>
			<h2 use:melt={$title} class="mx-auto text-center text-2xl text-white">Upload</h2>
			<button
				use:melt={$close}
				class="absolute right-4 top-4 rounded p-1 text-bellflower-100 hover:bg-lavender-900 hover:text-red-500"
			>
				<X class="h-5 w-5" />
			</button>
			<p use:melt={$description} class="mx-auto text-center text-slate-500">
				Choose a local or a remote video to upload.
			</p>
			<div class="flex flex-col gap-2 text-white">
				<div class="mt-4 flex h-12 w-full flex-row items-center gap-2">
					<!-- kind of bad for accessibility -->
					<span class="w-14">Local File</span>
					<label
						for="video-upload-local"
						aria-label="Upload a local video"
						class="flex h-full flex-1 items-center justify-center rounded border border-lapis-500 bg-lapis-500 p-2 text-white focus-within:bg-transparent hover:bg-transparent"
					>
						<Upload class="h-5 w-5" />
						<input type="file" id="video-upload-local" class="absolute right-0 h-0 w-0 opacity-0" />
					</label>
				</div>
				<fieldset class="mt-4 flex h-12 flex-row items-center gap-2">
					<label for="video-upload-remote" class="w-14">Remote File</label>
					<input
						type="text"
						placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						id="video-upload-remote"
						class="w-full flex-1 rounded bg-smore-900 p-3"
					/>
					<button
						class="flex h-full w-10 items-center justify-center rounded border border-lapis-500 bg-lapis-500 outline-none focus-within:bg-transparent hover:bg-transparent"
					>
						<ArrowRight class="h-5 w-5" />
					</button>
				</fieldset>
			</div>
		</div>
	{/if}
</div>
