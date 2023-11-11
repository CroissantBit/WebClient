import { writable } from 'svelte/store';

export const connectionState = writable<WebSocket['CLOSED'] | WebSocket['OPEN']>(3);
