

import { writable } from 'svelte/store';

export let  runningTime    = writable(0);
export let  startTime      = writable(null);
export let  isPlayingStore  = writable(false);  
export let  interval       = writable(null);

