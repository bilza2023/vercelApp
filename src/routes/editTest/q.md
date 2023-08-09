Look at this svelte component. SkillEditor.svelte

it has a svelte store variable "questionsStore" which has question objects each question object has a field "content" which again is an array of objects.

The SkillEditor.svelte gets "index" which is the index of the question it is responsible for its question.content array of objects.

It gets the second array of objects (questions[index].content) and give each item to a group of inputs in 
    {#each questionContent as item,innerIndex }


The problem is that this group of inputs does not edit the content fields properly. The main issue seems to be in bind:value
instead of bind:value={item.borderWidth}
it should be something like
bind:value={questionsStore[index].content[innerIndex].borderWidth}

SkillEditor.svelte
<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import getDivItem  from "./div/getDivItem";
import DivDsiplay from "./div/DivDsiplay.svelte";
import {toast,onMount} from '$lib/util';
import {questionsStore,itemStore} from '../../routes/editTest/store';


let displayEdit = true;

export let index;
$:questionContent = $questionsStore[index].content;

onMount(async ()=>{
  try {
    console.log(questionContent);
  }catch(e) {
  }
});

function addDiv(){
    // debugger;
    if (questionContent.length < 10){
        const newItems = [...questionContent, getDivItem() ];
         
        questionsStore.update(questions => {
            questions[index].content = newItems;
            return questions;
        });

    }else {
        toast.push('Max number of items reached as question content')
    }
}

</script>

<div class='flex gap-2 bg-gray-600 mx-10 rounded-md'>
    <button 
        class='rounded-md bg-stone-400 p-2 m-2'
        on:click={()=>displayEdit = !displayEdit} >
        Edit Mode
    </button>
    </div>


<div class='bg-gray-900 p-4 m-10 rounded-md border-2 border-gray-600'>

{#if questionContent.length > 0}

{#if displayEdit}

    {#each questionContent as item,innerIndex }

    <DivDsiplay {item} />
    <!-- <DivComp {item}/> -->
    <FormRow title="Content">
    <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.content}  />
    </FormRow>
    
    <FormRow title="Background Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.bgColor} />
    </FormRow>

<FormRow title="Font Color">
<input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.fontColor} />
</FormRow>


<FormRow title="Border Color">
<input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.borderColor} />
</FormRow>

<FormRow title= {`Border Width: ${item.borderWidth}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.borderWidth} min=0 max=100/>
</FormRow>

<FormRow title= {`Font Size: ${item.fontSize}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.fontSize} min=0 max=200/>
</FormRow>

<FormRow title= 'Text Alignment'>
<select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.textAlign} >
  <option value="justify">justify</option>
  <option value="left" selected>Left</option>
  <option value="right">Right</option>
  <option value="center">Center</option>
</select>
</FormRow>

<!-- marginX & Y -->

<FormRow title= {`Margin X: ${item.marginX}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.marginX} min=0 max= 500/>
</FormRow>

<FormRow title= {`Margin Y: ${item.marginY}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.marginY} min=0 max= 50/>
</FormRow>

<!-- paddingX & Y -->

<FormRow title= {`Padding X: ${item.paddingX}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.paddingX} min=0 max= 300/>
</FormRow>

<FormRow title= {`Padding Y: ${item.paddingY}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.paddingY} min=0 max= 300 step=0.1 />
</FormRow>

<FormRow title= {`Opacity: ${item.opacity}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.opacity} min=0 max= 1 step=0.1/>
</FormRow>

<FormRow title= {`Border Radius: ${item.borderRadius}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.borderRadius} min=0 max=100 step=1/>
</FormRow>
    {/each}

{:else}
    
    {#each questionContent as item,index }
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