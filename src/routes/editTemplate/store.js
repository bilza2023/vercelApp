
import { writable } from 'svelte/store';

export const templateLocalStore     = writable({});
export const questionsStore         = writable({});

export const showTestStore     = writable(false);
export const showCloneStore    = writable(false);
export const showDeleteStore   = writable(false);

export const showErrorsStore   = writable(false);
export const errorsArrayStore   = writable([]);


