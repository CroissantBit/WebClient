<script lang="ts">
	import {
		BarChart2,
		Check,
		ChevronDown,
		ChevronRight,
		Cpu,
		Film,
		Speaker,
		Terminal,
		Wifi,
		X
	} from 'lucide-svelte';
	import type { DeviceInfo } from '$lib/types/metadata';
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	export let device: DeviceInfo;

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();
</script>

<div use:melt={$root}>
	<div class="flex flex-row items-center gap-2 rounded bg-smore-900 p-1 hover:bg-lavender-900">
		<button
			use:melt={$trigger}
			class="flex h-8 w-8 items-center justify-center rounded-full bg-smore-950 hover:bg-lapis-500"
		>
			{#if $open}
				<ChevronDown class="h-4 w-4 text-bellflower-100" />
			{:else}
				<ChevronRight class="h-4 w-4 text-bellflower-100" />
			{/if}
		</button>
		<div class="flex-1">
			<h2 class="mb-1 text-bellflower-100">{device.friendlyName}</h2>
			<div class="flex flex-row items-center gap-2 text-xs text-slate-500">
				<div class="flex flex-row items-center gap-1">
					<BarChart2 class="h-3 w-3" />
					{device.ping}ms
				</div>
				<div class="flex flex-row items-center gap-1">
					<Speaker class="h-3 w-3" />
					{#if device.supportsAudio}
						<Check class="h-3 w-3" />
					{:else}
						<X class="h-3 w-3" />
					{/if}
				</div>
				<div class="flex flex-row items-center gap-1">
					<Film class="h-3 w-3" />
					{#if device.supportsVideo}
						<Check class="h-3 w-3" />
					{:else}
						<X class="h-3 w-3" />
					{/if}
				</div>
				<div class="flex flex-row items-center gap-1">
					<Terminal class="h-3 w-3" />
					{#if device.supportsControl}
						<Check class="h-3 w-3" />
					{:else}
						<X class="h-3 w-3" />
					{/if}
				</div>
			</div>
		</div>
		<span class="text-xs text-slate-500">
			{#if device.wiredDeviceInfo == undefined}
				<Wifi class="h-6 w-6" />
			{:else}
				<Cpu class="h-6 w-6" />
			{/if}
		</span>
	</div>

	{#if $open}
		<div
			use:melt={$content}
			transition:slide
			class="mt-2 flex flex-col rounded bg-smore-900 p-1 text-xs text-slate-500"
		>
			<span>ID: {device.id}</span>
			<span>Uptime: {device.uptime}s</span>
			{#if device.wiredDeviceInfo != undefined}
				<span>Port: {device.wiredDeviceInfo.port}</span>
			{:else if device.wirelessDeviceInfo != undefined}
				<span>IP: {device.wirelessDeviceInfo.ip}</span>
				<span>Port: {device.wirelessDeviceInfo.port}</span>
			{/if}
		</div>
	{/if}
</div>
