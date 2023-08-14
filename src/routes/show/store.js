
import { writable } from 'svelte/store';

export const itemStore = writable({});
export const pageStateStore = writable('loading');
export const studentIdStore = writable('');
export const studentNameStore = writable('');


