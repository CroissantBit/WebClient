import type { VideoMetadata } from '$lib/types/metadata';
import { writable } from 'svelte/store';

// Cretate a new store to hold the video metadata
export const videos = writable<VideoMetadata[]>([]);
// On first creation, fetch the video metadata from the server

// TODO
// Register update event
