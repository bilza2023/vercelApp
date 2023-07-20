<script>
 import { SvelteToast } from '@zerodevx/svelte-toast'
 import MainNav from '$lib/appComp/MainNav.svelte';
import {isLoginStore} from '../lib/cmn/appStore';
// import {loadApp} from '$lib/ajax';
// $: isLogin = $isLoginStore;

  import "../app.postcss";
  const options = {}

function checkLogin(){
   if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('token');
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  return token && token !== '';
}
  if (checkLogin() ) {
    isLoginStore.set(true);
    // debugger;
    // loadApp();
  }
</script>




<SvelteToast {options} />

<MainNav/>
<slot />
