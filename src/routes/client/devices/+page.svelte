<script lang="ts">
	import { devices } from '$lib/client/stores/devicesList';
	import DeviceItem from '$lib/components/DeviceItem.svelte';
</script>

<div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] flex-col gap-2">
	{#if $devices.length === 0}
		<div class="text-center text-slate-500">No connected devices found.</div>
	{/if}
	{#each $devices as device (device.id)}
		<DeviceItem {device} />
	{/each}
</div>
