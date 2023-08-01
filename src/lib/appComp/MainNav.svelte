<script>
// @ts-nocheck
import {NavBar,NavBtn,NavBtn2,Centre,Range,Card,BtnIconOval} from '$lib/cmp';
// import {onMount,toast} from '$lib/util';
import Logo from './Logo.svelte';
import { isLoginStore } from '$lib/cmn/appStore';
import logout from './fn/logout';
$: isLogin = $isLoginStore;

// function hasToken() {
//   if (typeof window === 'undefined') return false;
//   const token = localStorage.getItem('token');
//   if (!token) return false;
//   const parts = token.split('.');
//   if (parts.length !== 3) return false;
//   return token && token !== '';
// }

</script>
            <!-- ******************************** -->
<!-- decided not to use NavBar comp -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    <Logo />
    <!-- {#if isLogin} -->
    <!-- <NavBtn title='Sync' icon='♻️'/> -->
    <!-- {/if} -->
    </div>
            <!-- ******************************** -->
            <!-- ******************************** -->
    <div class='flex'>
    {#if isLogin}
    <!-- <NavBtn title='Templates' icon ='📜' url='/templates'/> -->
    <NavBtn title='Tests' icon ='🧪' url='/tests'/>
    <NavBtn title='Running' icon ='🏃‍♂️' url='/running'/>
    <NavBtn title='System' icon ='🔧' url='/system'/>
    <NavBtn title='Help' icon ='📘' url='/docs'/>

      <NavBtn2 title='Logout' icon ='🚪' clk={logout}/>
    
    {:else}
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    <NavBtn title='Signin' icon ='🔓'  url='/register'/>
    {/if}
    </div>
</div><!--outer most div-->

