<script>
// @ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from './Logo.svelte';
import logout from './logout';
import {isLoginStore,onMount,Icons,chqLogin} from '$lib/util';

$: isLogin = $isLoginStore;

onMount( async ()=>{
    chqLogin()
});

</script>
            <!-- ******************************** -->
<!-- decided not to use NavBar comp -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    {#if isLogin}
    <Logo url='/' />
    <!-- <NavBtn title='Sync' icon='♻️'/> -->
    {:else}
    <Logo url='/' />
    {/if}
    </div>
            <!-- ******************************** -->
            <!-- ******************************** -->
    <div class='flex'>
    {#if isLogin}
    <NavBtn title='Blog' icon ={Icons.BOOK} url='/blog'/>

      <NavBtn2 title='Logout' icon ='🚪' clk={logout}/>
    
    {:else}
    <NavBtn title='Blog' icon ={Icons.BOOK} url='/blog'/>
    <NavBtn title='Pricing' icon ={Icons.ROCKET} url='/pricing'/>
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    <NavBtn title='Signup' icon ='🔓'  url='/register'/>
    {/if}
    </div>
</div><!--outer most div-->

