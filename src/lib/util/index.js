        // @ts-nocheck
        import { browser } from '$app/environment';
        import { onMount } from 'svelte';
        import { toast } from '@zerodevx/svelte-toast';
        import { fade } from 'svelte/transition';
        import { get } from 'svelte/store';
        import { BASE_URL } from './config';
        import { goto } from '$app/navigation';
        import Icons from './icons';
        import chqLogin from '../loginFns/chqLogin';
        import {isLoginStore , accountPaidStore} from './appStore';
        import ajaxPost from './ajaxPost';
        import ajaxGet from './ajaxGet';

        export {
                isLoginStore , 
                accountPaidStore,
                onMount,
                BASE_URL,
                toast,
                fade,
                get,
                goto,
                browser,
                Icons,
                ajaxPost,
                ajaxGet,
                chqLogin
        }