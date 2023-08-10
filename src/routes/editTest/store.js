
import { writable } from 'svelte/store';

export const itemStore     = writable( {} );
export const questionsStore         = writable([]);

export const showRunDlgStore     = writable(false);

export const templateLocalStore     = writable({});
export const showQuestionsStore     = writable(false);

export const showTestStore          = writable(false);
export const showCloneStore         = writable(false);
export const showDeleteStore        = writable(false);

export const showErrorsStore        = writable(false);
export const errorsArrayStore       = writable([]);


