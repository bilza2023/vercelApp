// @ts-nocheck

import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import Icons from './icons';
import ajaxPost from './ajaxPost';
import Agent from './Agent';

            export {
                    onMount,
                    toast,
                    fade,
                    get,
                    goto,
                    Icons,
                    ajaxPost,
                    Agent
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */