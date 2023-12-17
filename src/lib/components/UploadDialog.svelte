<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { Upload, X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	
	export let show : Boolean
	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});


	
	
	let sendForm = false
	let sucSendForm = false
	let errorMessage = ""
	$: if ($open) {
		console.log('show changed, and it is now true');
		setTimeout(() => {
		document.querySelector('form')!.addEventListener('submit', async function (event) {
				console.log("fired")
				event.preventDefault();
				const songName = document.querySelector("#songName")!.value;
				if (songName.split(" ").length > 1)
				{
					sendForm = true;
					sucSendForm = false;
					errorMessage = "Dont include whitespaces in the song name"
					return;
				}
				const form = event.target as HTMLFormElement | null;
				if (!form) {
					console.error('Form element not found');
					return;
				}

				// Get form data
				const formData = new FormData(form);
				try {
					sendForm = true
					
					const response = await fetch('https://localhost:7178/upload', {
						method: 'POST',
						body: formData,
					})
					sucSendForm = true
					
					console.log(response)
					window.location.reload();
				}
				catch (e) {
					console.log(e.message)
					sucSendForm = false
					errorMessage = e.message
				}
		})
		},500);
	} else {
		console.log('show changed, and it is now false');
	}
	


	
	 
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
			<form id="formAddSong"  class="flex flex-col gap-2 text-white formAddSong"   >
				<div class="flex justify-between items-center">
					<span class="w-14">Local File</span>
					<div class="relative">
						<Upload class="h-5 w-5" />
						<input name="file" type="file" id="video-upload-local" class="absolute right-0 h-full w-full  cursor-pointer bg-red-600 top-0 opacity-0" />	
					</div>
				</div>
				<br>
				<input type="hidden" name="password" value="sdfdsf" id="passwordInput">
				<input type="hidden" name="private" value="true" id="isPrivate">
				<br>
				
				<div class="flex ">
					<label for="songName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist - SongName</label>
					<input type="text" name="songName" value="" id="songName" aria-describedby="bpmInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Michael Jackson - Billie Jean">
				</div>
				<br>
				<div class="flex ">
					<label for="bpm" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bpm of the song</label>
					<input value="" name="bpm" type="text" id="bpm" aria-describedby="bpmInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="130">
				</div>
				
				<br>
				<button type="submit"
						class="border h-full flex-1 items-center justify-center rounded border border-lapis-500 bg-lapis-500 p-2 text-white focus-within:bg-transparent hover:bg-transparent">
				Upload	
				</button>
			</form>

			
			{#if sendForm && sucSendForm}
				<div class="text-green-700">Successfully added Song</div>

			{/if}
			{#if sendForm && !sucSendForm}
				<div class="text-red-600">{errorMessage}</div>

			{/if}
		</div>
	{/if}
	

</div>
