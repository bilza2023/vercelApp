
 in this svelte component we have questionsStore which is a store variable and is an array of objects of question objects, each question object has a field called content which again is an array of objects

check the addDiv function which correctly adds a new item into the content 

please write we following function

deleteDiv -- to delete 1 item from content item from 
moveUp -- to move content item 1 step up
movedown -- to move content item 1 step down

<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import getDivItem  from "./div/getDivItem";
import DivDsiplay from "./div/DivDsiplay.svelte";
import Editor from "./Editor.svelte";
import {toast,onMount,Icons} from '$lib/util';
import {questionsStore,itemStore} from '../../store';


let displayEdit = true;

export let questionIndex;
$:questionContent = $questionsStore[questionIndex].content;

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
            <Editor  {questionIndex} {contentIndex}/>
            {/if}

    {/each}
{/if}
</div>


