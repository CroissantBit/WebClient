import { writable } from 'svelte/store';

export const previousConnections = writable<string[]>(
	JSON.parse(localStorage.getItem('previousConnections') || '[]')
);
previousConnections.subscribe((value) => {
	localStorage.setItem('previousConnections', JSON.stringify(value));
});
