import type { DeviceInfo } from '$lib/types/metadata';
import { writable } from 'svelte/store';

export const devices = createDevicesStore();

function createDevicesStore() {
	const { subscribe, update, set } = writable<DeviceInfo[]>([]);

	return {
		subscribe,
		set,
		/**
		 * Updates existing and appends leftover items to the store
		 */
		updateDevices: async (deviceInfo: DeviceInfo[]) => {
			update((videos) => {
				return deviceInfo.reduce((updatedDevices, item) => {
					const index = updatedDevices.findIndex((video) => video.id === item.id);
					if (index !== -1) {
						updatedDevices[index] = item;
					} else {
						updatedDevices.push(item);
					}
					return updatedDevices;
				}, videos);
			});
		}
	};
}
