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


<a href="/math?id=650b951ed750929738a45500">fbise_cl_9_ch_4_ex_4.1_q_3_pt_2</a>


</PageWrapper>