<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,BtnWIconSm} from '$lib/cmp';
import { Icons} from '$lib/util';
import save from './fn/save';
import BasicDetails from './BasicDetails.svelte';
import {itemStore} from './store';
$: item = $itemStore;
import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>    
<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.TEAM}>Create Tag</HdgWithIcon>
    </Centre>
    <br/>

    <div class='mx-10'>
        <BasicDetails  {item} />
    </div>
    <br/>

    <div class='flex justify-center w-full'>
        <BtnWIconSm 
        clk={save}
        icon={Icons.SAVE}>Save</BtnWIconSm>
    </div>

</PageWrapper>
