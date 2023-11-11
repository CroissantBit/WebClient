import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const previousConnections = writable<string[]>(
	JSON.parse((browser && localStorage.getItem('previousConnections')) || '[]')
);
if (browser)
	previousConnections.subscribe((value) => {
		localStorage.setItem('previousConnections', JSON.stringify(value));
	});
