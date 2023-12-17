<script lang="ts">
	import axios from 'axios';

	export let songname: any;
	export let bpm: any;
	export let laenge: any;

	export let count: number;

	let triedPlayingGame = false;
	let gameStartedSuc = false;

	let activePlaying = false;

	function formatTime(duration: string): string {
		if (duration === 'Duration not found in output') {
			return 'around  3 min';
		}
		let arr = duration.split(':');
		if (arr.length < 2) return 'around 3 min';
		return arr[1] + ':' + arr[2].substring(0, 2);
	}

	async function startSong(event) {
		try {
			const idOfSong = event.target.dataset.count;
			activePlaying = true;
			gameStartedSuc = true;
			triedPlayingGame = true;
			const response = await axios.get('https://localhost:7178/play/' + idOfSong);
			console.log(response);
		} catch (e) {
			console.log(e.message);
			gameStartedSuc = false;
		}
	}
</script>

<div
	class={`flex flex-row items-center gap-10 rounded  ${activePlaying ? 'bg-green-400' : ''}
${triedPlayingGame && !gameStartedSuc ? 'bg-red-950 hover:bg-red-600' : ''}
  ${!activePlaying ? 'bg-smore-900 p-1 hover:bg-lavender-900' : ''}
`}
>
	<div
		on:click={startSong}
		class={`flex h-[4rem] w-[5rem] cursor-pointer items-center justify-center rounded-full transition ${
			!triedPlayingGame ? 'bg-blue-950-700 hover:bg-blue-800' : ''
		}
  
  `}
		data-count={count}
	>
		<img class="block h-10 w-12" src="/playButton.png" alt="" data-count={count} />
	</div>
	<div class="flex w-full items-center justify-between gap-x-4 gap-y-1 align-middle">
		<div>
			<h3 class="font-bold text-amber-50">{songname}</h3>
			<div class="flex items-center gap-[0.1rem] align-middle text-[0.75rem]">
				<img class="h-6 w-6 brightness-75 invert" src="/activity.png" alt="" />
				<span>{bpm}</span>
				<span> BPM</span>
			</div>
		</div>
		<div class="pr-4">
			{formatTime(laenge)}
		</div>
	</div>
</div>

<style>
	.activePlaying {
		background: chartreuse !important;
	}
</style>
