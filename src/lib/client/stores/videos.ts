import type { VideoMetadata } from '$lib/types/metadata';
import { writable } from 'svelte/store';

// Cretate a new store to hold the video metadata
export const videos = writable<VideoMetadata[]>([]);
// On first creation, fetch the video metadata from the server

// TODO
// Register update event

/*
function updateVideos(VideoMetadata: VideoMetadata[])
{
    VideoMetadata.forEach(item => {
        // Replace each matching id with new item
        // 
    });
}
*/

function createVideoStore() {
	const { subscribe, set } = writable<VideoMetadata[]>([]);

	return {
		subscribe,
		/**
		 * Updates existing and then appends leftover items to the store
		 * @param videoMetadata
		 */
		appendVideos: async (videoMetadata: VideoMetadata[]) => {
			videoMetadata.forEach((item) => {});
		}
        // use derivede 
	};
}
