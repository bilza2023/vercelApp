<script>
import {PageWrapper} from '$lib/cmp';

import MainNav from '$lib/appComp/MainNav.svelte';

import {isLoginStore,onMount,Icons,chqLogin} from '$lib/util';
$: isLogin = $isLoginStore;
onMount( async ()=>{
    chqLogin()
});

</script>

<PageWrapper>
<MainNav/>




<div class="p-1 m-1 bg-red-700">
<h1>Welcome</h1>

</div>
</PageWrapper>