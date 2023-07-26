
import { writable } from 'svelte/store';

export const itemStore     = writable({});

export const showDeleteStore = writable(false);
export const showRunDlgStore = writable(false);

