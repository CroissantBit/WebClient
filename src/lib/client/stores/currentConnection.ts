import type { Connection } from '$lib/client/connection';
import { writable } from 'svelte/store';

export const currentConnection = writable<Connection>();
