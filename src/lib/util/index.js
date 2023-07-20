// @ts-nocheck

import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import Icons from './icons';
            export {
                    onMount,
                    toast,
                    fade,
                    get,
                    goto,
                    Icons
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */