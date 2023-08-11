<script>
//@ts-nocheck
// -8/Aug-2023 QuestionContentEditor : This is just one of the many possible wiringup of Displays and Editors. We can have many such arragements. This is specifically for creating content for Questions. We can have a different such arrangement for "Web Page Builder" but the base components like DivEditor or DivDisplay remains the same.

import getDivItem  from "../div/divData";
import DivDisplay from "../div/DivDisplay.svelte";
import DivEditor from "../div/DivEditor.svelte";
import {Icons} from '$lib/util';
// import {questionsStore,itemStore} from '../../store';


export let MaxNumberOfItems = 10;
export let displayEdit = false;
export let content;

function deleteDiv(contentIndex) {
    content = content.splice(contentIndex, 1);
}

function moveUp(contentIndex) {
    if (contentIndex > 0) {
        const newContent = [...content];
        [newContent[contentIndex], newContent[contentIndex - 1]] = [newContent[contentIndex - 1], newContent[contentIndex]];
        content = newContent;
    }
}

function moveDown(contentIndex) {
    if (contentIndex < content.length - 1) {
        const newContent = [...content];
        [newContent[contentIndex], newContent[contentIndex + 1]] = [newContent[contentIndex + 1], newContent[contentIndex]];
        content = newContent;
    }
}

function addDiv(){
    // debugger;
    if (content.length < MaxNumberOfItems){
        const newItems = [...content, getDivItem() ];
         content = newItems;
    }else {
        console.error('Max number of items reached as question content')
    }
}

</script>
 <!-- top bar -->
<div class='flex  bg-stone-700 mx-10  p-1 m-1  mt-0'>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>displayEdit = !displayEdit} >
        {Icons.EYE}
    </button>

    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addDiv}>
        {Icons.NOTES}
    </button>

</div>



<!-- middle bar -->
<div class='bg-gray-900 p-4 mx-10 my-0  border-2 border-gray-600'>


{#if content.length > 0}

    {#each content as contentItem , contentIndex }
    <DivDisplay {contentItem} />
            
    {#if displayEdit}
    <DivEditor  {contentItem}  {contentIndex} {moveDown} {moveUp} {deleteDiv}/>
    {/if}

    {/each}
{:else}
<p class='p-1 m-1 text/sm'>No Content Items added</p>
{/if}
</div>


