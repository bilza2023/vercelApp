<script>
// @ts-nocheck
import {NavBar,NavBtn,Centre,Range,Card,BtnIconOval} from '$lib/cmp';
import {onMount,toast} from '$lib/util';
import Logo from './Logo.svelte';

function hasToken() {
   if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('token');
    // const parts = token.split('.');
//   if (parts.length !== 3) return false;
  // return token && token !== '';
  return true; ///remove 
}

</script>
            <!-- ******************************** -->
<!-- decided not to use NavBar comp -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    <Logo />
    {#if hasToken()}
    <NavBtn title='Sync' icon='♻️'/>
    {/if}
    </div>
            <!-- ******************************** -->
            <!-- ******************************** -->
    <div class='flex'>
    {#if hasToken()}
    <NavBtn title='Templates' icon ='📜' url='/templates'/>
    <NavBtn title='Tests' icon ='🧪' url='/tests'/>
    <NavBtn title='Running' icon ='🏃‍♂️' url='/running'/>
    <NavBtn title='System' icon ='🔧' url='/system'/>
    <NavBtn title='Help' icon ='📘' url='/help'/>
    <NavBtn title='Logout' icon ='🚪' url='/logout'/>
    {:else}
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    <NavBtn title='Signin' icon ='🔓'  url='/signin'/>
    {/if}
    </div>
</div><!--outer most div-->

