i have a svelte component SkillEditor.svelte as child of Questions.svelte

The SkillEditor.svelte is responsible to edit the question.content and return it but it does not change the content

questions.svelte
<script>
// @ts-nocheck
import {fade} from '$lib/util';
import {FormRow,Tf,InputElm,InputTextArea} from '$lib/cmp';
import SkillEditor from '../../../lib/skillEditor/SkillEditor.svelte';
import {SectionHeadIcon} from '$lib/cmp';
import Options from './Options.svelte';

export let questions;
export let deleteQuestion;
</script>

        {#if  questions }  
        {#each questions as question, index }  
        <SectionHeadIcon title={question.content}  ser={index+1} 
        deleteFn ={()=>deleteQuestion(question.id)}
         >
          
          <!-- ****************************************** -->
          <!-- ****************************************** -->
          <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >

          <SkillEditor  content={questions[index].content} />  
          <!-- <FormRow title="Question">
          <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={question.content} />
          </FormRow> -->
          
          <FormRow title="Multi Select">
          <Tf obj={question} bool_prop="multiSelect"  />
          </FormRow>

          <FormRow title="Explanation">
          <textarea class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
              bind:value={question.explanation}></textarea>
          </FormRow>

          <br/>


          <div class="text-center">
                  <Options {question} />
              <br/>
          </div>

          </div>

          <!-- ****************************************** -->
          <!-- ****************************************** -->
        </SectionHeadIcon>
        <br/>
        {/each}
        {/if}

SkillEditor.svalte
<script>
//@ts-nocheck
export let content = '';

import getDivItem  from "./div/getDivItem";
import DivComp from "./div/DivComp.svelte";
import DivDsiplay from "./div/DivDsiplay.svelte";
import {toast,onMount} from '$lib/util';

let displayEdit = true;
let items = [];

onMount  (async ()=>{
//  items = [...items, getDivItem() ];
});

function addDiv(){
    // debugger;
    if (items.length < 10){
        items = [...items, getDivItem() ];
        content = JSON.stringify(items);
        console.log("items" ,  items);
        console.log("content" ,  content);
    }else {
        toast.push('Max number of items reached as question content')
    }
}
</script>

<div class='flex gap-2 bg-gray-600 mx-10 rounded-md'>
    <button 
    class='rounded-md bg-stone-400 p-2 m-2'
    on:click={()=>displayEdit = !displayEdit}>Edit Mode</button>
    </div>


<div class='bg-gray-900 p-4 m-10 rounded-md border-2 border-gray-600'>

{#if items.length > 0}

{#if displayEdit}
    {#each items as item,index }
    <DivComp {item}/>
    {/each}

{:else}
    {#each items as item }
    <DivDsiplay {item} />
    {/each}
{/if}

{/if}
  

</div>

  <div class='flex gap-2 bg-gray-600 mx-10 rounded-md'>
    <button 
    class='rounded-md bg-stone-400 p-2 m-2'
    on:click={addDiv}>Add Div</button>

    </div>

