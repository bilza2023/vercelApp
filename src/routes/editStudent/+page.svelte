<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,BtnWIconSm} from '$lib/cmp';
import { Icons , onMount , Agent } from '$lib/util';
import AdditionalDetails from './AdditionalDetails.svelte';
import save from './fn/update';
import deleteFn from './fn/deleteFn';
import BasicDetails from './BasicDetails.svelte';

import {itemStore} from './store';
$: item = $itemStore;

onMount(async ()=>{
  try {
    // debugger;
    const id = new URLSearchParams(location.search).get("quizId");
    const resp = await Agent.readone('student' , { id });
    if (resp.ok){
      
      const data = await resp.json();
      // item = (data.item);
      itemStore.set(data.item);  

    }else {
    toast.push('failed to load');
    }
  } catch (e) {
    console.error(e);
  }   
});


</script>

<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.STUDENTCAP}>Edit Student</HdgWithIcon>
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
        icon={Icons.SAVE}>Update</BtnWIconSm>

         <BtnWIconSm 
        bgColor ="bg-red-800"
        clk={()=>deleteFn(item)}
        icon={Icons.DEL}>Delete</BtnWIconSm>

    </div>



</PageWrapper>
