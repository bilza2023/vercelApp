<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import getDivItem  from "./div/getDivItem";
import DivDsiplay from "./div/DivDsiplay.svelte";
import DivEditor from "./div/DivEditor.svelte";
import {toast,onMount,Icons} from '$lib/util';
import {questionsStore,itemStore} from '../../store';


let displayEdit = false;

export let questionIndex;
$:questionContent = $questionsStore[questionIndex].content;

function deleteDiv(contentIndex) {
    questionsStore.update(questions => {
        const newContent = [...questionContent];
        newContent.splice(contentIndex, 1);
        questions[questionIndex].content = newContent;
        return questions;
    });
}

function moveUp(contentIndex) {
    if (contentIndex > 0) {
        questionsStore.update(questions => {
            const newContent = [...questionContent];
            [newContent[contentIndex - 1], newContent[contentIndex]] = [newContent[contentIndex], newContent[contentIndex - 1]];
            questions[questionIndex].content = newContent;
            return questions;
        });
    }
}

function moveDown(contentIndex) {
    if (contentIndex < questionContent.length - 1) {
        questionsStore.update(questions => {
            const newContent = [...questionContent];
            [newContent[contentIndex], newContent[contentIndex + 1]] = [newContent[contentIndex + 1], newContent[contentIndex]];
            questions[questionIndex].content = newContent;
            return questions;
        });
    }
}
function addDiv(){
    // debugger;
    if (questionContent.length < 10){
        const newItems = [...questionContent, getDivItem() ];
         
        questionsStore.update(questions => {
            questions[questionIndex].content = newItems;
            return questions;
        });
    }else {
        toast.push('Max number of items reached as question content')
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


{#if questionContent.length > 0}

    {#each questionContent as item , contentIndex }
    <DivDsiplay {item} />
            
            {#if displayEdit}
            <DivEditor  {questionIndex} {contentIndex} {moveDown} {moveUp} {deleteDiv}/>
            {/if}

    {/each}
{:else}
<p class='p-1 m-1 text/sm'>No Content Items added</p>
{/if}
</div>


