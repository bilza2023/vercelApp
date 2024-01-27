// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import chqLogin from './chqLogin.js';
import checkToken from './checkToken';
import checkAdminToken from './checkAdminToken';
import convertEqsToSlide from './convertEqToSlide.js';
import { BASE_URL } from './config';
import { RESOURCE_URL } from './config';
import { isLoginStore,isAdminStore } from './appStore';
import Icons from './icons';
import uuid from './uuid';
import ajaxPost from './ajaxPost.js';
import updateStoreArray from './updateStoreArray.js';
// import chqLogin from './chqLogin';

            export {
            isLoginStore,isAdminStore,
            BASE_URL,
            RESOURCE_URL,
            ajaxPost,
                    onMount,
                    toast,
                    fade,
                    updateStoreArray,
                    chqLogin,
                    get,
                    convertEqsToSlide,
                    uuid,
                    goto,
                    browser,
                    Icons,
                    checkToken,
                    checkAdminToken
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */