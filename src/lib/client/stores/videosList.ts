import type { VideoMetadata } from '$lib/types/metadata';
import { writable } from 'svelte/store';

export const videos = createVideosStore();

function createVideosStore() {
	const { subscribe, update } = writable<VideoMetadata[]>([]);

	return {
		subscribe,
		/**
		 * Updates existing and appends leftover items to the store
		 */
		updateVideos: async (videoMetadata: VideoMetadata[]) => {
			update((videos) => {
				return videoMetadata.reduce((updatedVideos, item) => {
					const index = updatedVideos.findIndex((video) => video.id === item.id);
					if (index !== -1) {
						updatedVideos[index] = item;
					} else {
						updatedVideos.push(item);
					}
					return updatedVideos;
				}, videos);
			});
		}
	};
}
