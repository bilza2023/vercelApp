<script>
//@ts-nocheck
// -8/Aug-2023 QuestionContentEditor : This is just one of the many possible wiringup of Displays and Editors. We can have many such arragements. This is specifically for creating content for Questions. We can have a different such arrangement for "Web Page Builder" but the base components like DivEditor or DivDisplay remains the same.

import {divData,listData,tableData,preData,youtubeData,imageData,Display,Editor} from '$lib/SkillEditor';
import {Icons} from '$lib/util';
import { questionsStore } from './store';


export let questionIndex; //Main 

export let MaxNumberOfItems = 10;
export let displayEdit = false;
 
$:content  = $questionsStore[questionIndex].content;

function deleteDiv(contentIndex) {
     questionsStore.update(questions => {
        questions[questionIndex].content = questions[questionIndex].content.filter((_, index) => index !== contentIndex);
        return questions;
    });
}

function moveUp(contentIndex) {
  if (contentIndex > 0) {
        questionsStore.update(questions => {
            const newContent = [...questions[questionIndex].content];
            [newContent[contentIndex - 1], newContent[contentIndex]] = [newContent[contentIndex], newContent[contentIndex - 1]];
            questions[questionIndex].content = newContent;
            return questions;
        });
    }
}

function moveDown(contentIndex) {
      if (contentIndex < content.length - 1) {
        questionsStore.update(questions => {
            const newContent = [...questions[questionIndex].content];
            [newContent[contentIndex], newContent[contentIndex + 1]] = [newContent[contentIndex + 1], newContent[contentIndex]];
            questions[questionIndex].content = newContent;
            return questions;
        });
    }
}

function addDiv(){
     if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content = [...questions[questionIndex].content, divData()];
            return questions;
        });
    } else {
        toast.push('Max number of items reached as question content');
    }
}
function addList(){
     if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content = [...questions[questionIndex].content, listData()];
            return questions;
        });
    } else {
        toast.push('Max number of items reached as question content');
    }
}
function addTable(){
     if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content = [...questions[questionIndex].content, tableData()];
            return questions;
        });
    } else {
        toast.push('Max number of items reached as question content');
    }
}
function addPre(){
     if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content = [...questions[questionIndex].content, preData()];
            return questions;
        });
    } else {
        toast.push('Max number of items reached as question content');
    }
}
function addYoutube(){
     if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content = [...questions[questionIndex].content, youtubeData()];
            return questions;
        });
    } else {
        toast.push('Max number of items reached as question content');
    }
}
function addImage(){
     if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content = [...questions[questionIndex].content, imageData()];
            return questions;
        });
    } else {
        toast.push('Max number of items reached as question content');
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
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addList}>
        {'■'}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addTable}>
        {Icons.CHARTDOWN}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addPre}>
        {Icons.CODE}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addYoutube}>
        {Icons.NET}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addImage}>
        {Icons.PALETTE}
    </button>

</div>



<!-- middle bar -->
<div class='bg-gray-900 p-4 mx-10 my-0  border-2 border-gray-600'>


{#if content.length > 0}

    {#each content as contentItem , contentIndex }
    <Display {contentItem} />
            
    {#if displayEdit}
    <Editor {contentItem}  {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv}/>
    {/if}

    {/each}
{:else}
<p class='p-1 m-1 text/sm'>No Content Items added</p>
{/if}
</div>


