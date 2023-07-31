<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,BtnWIconSm} from '$lib/cmp';
import { Icons} from '$lib/util';
import AdditionalDetails from './AdditionalDetails.svelte';
import save from './fn/save';
import BasicDetails from './BasicDetails.svelte';

import {itemStore} from './store';
$: item = $itemStore;
    
</script>

<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.STUDENTCAP}>Students Admissions</HdgWithIcon>
    </Centre>
    <br/>

    <div class='mx-10'>
        <BasicDetails  {item} />
    </div>

    <br/>

    <div class='mx-10'>
        <AdditionalDetails {item}/>
    </div>

    <br/>

    <div class='flex justify-center w-full'>
        <BtnWIconSm 
        clk={save}
        icon={Icons.SAVE}>Save</BtnWIconSm>
    </div>



</PageWrapper>
