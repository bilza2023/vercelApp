<script>
// @ts-nocheck

import { PageWrapper , HdgWithIcon , Centre , BtnWIconSm ,SectionHead,FormRow,InputElm,Comment,InputTextArea } from '$lib/cmp';
import { Agent , onMount , Icons } from '$lib/util'; 
import update from './fn/update';
// import {itemStore} from './store';
// $: item = $itemStore;
let item;

onMount(async ()=>{
  try {
    // debugger;
    const id = new URLSearchParams(location.search).get("quizId");
    const resp = await Agent.readone('tag' , { id });
    if (resp.ok){
      
      const data = await resp.json();
      item = (data.item);
    //   itemStore.set(data.item);  

    }else {
    toast.push('failed to load');
    }
  } catch (e) {
    console.error(e);
  }   
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
{#if item}
<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.TEAM}>Update Tag</HdgWithIcon>
    </Centre>
    <br/>

    <div class='mx-10'>
    <SectionHead title='Basic Details' icon={ Icons.PENCIL  } visible={true} >

        <FormRow title='Class Name' >
            <InputElm {item}  value='name'/>
            <Comment>The Tag Name must be unique, do not repeat a tag name.</Comment>
        </FormRow>
    
        <FormRow title='Description'  >
            <InputTextArea {item}  value='description'/>
            <Comment>This can be edited later.</Comment>
        </FormRow>

    </SectionHead>
    </div>
    <br/>

    <div class='flex justify-center w-full'>
        <BtnWIconSm 
        clk={()=>update(item)}
        icon={Icons.SAVE}>Update</BtnWIconSm>
    </div>

</PageWrapper>
{/if}