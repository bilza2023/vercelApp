<script>
//@ts-nocheck
// -8/Aug-2023 QuestionContentEditor : This is just one of the many possible wiringup of Displays and Editors. We can have many such arragements. This is specifically for creating content for Questions. We can have a different such arrangement for "Web Page Builder" but the base components like DivEditor or DivDisplay remains the same.

import {BtnWIconSm } from '$lib/cmp';
import {divData,listData,tableData,preData,youtubeData,imageData,Display,Editor} from '$lib/SkillEditor';
import {Icons,fade,toast} from '$lib/util';
import { questionsStore } from './store';
import ContentObj from './contentObj'

export let questionIndex; //Main 

export let MaxNumberOfItems = 10;
export let displayEdit = false;
let show = true;
//Every question has one content item which has contentItems which has 6 arrays including sortOrder arra.
// $:content  = $questionsStore[questionIndex].content;
let contentObj;
let formatted;
import { onMount } from "$lib/util";
onMount(()=>{
    // debugger;
const content = $questionsStore[questionIndex].content;    
contentObj = new ContentObj(content[0]);
// const rez =contentObj.findInDivs(contentObj.sortOrder()[0])
console.log("contentObj: " ,  contentObj);
// console.log("rez: " ,  rez);
console.log('formatQs()' , formatQs());
formatted = formatQs();
});


 function formatQs(){
    // debugger;
   const  rez = [];
   for (let i = 0; i < contentObj.getSortOrder().length; i++) {
        const sortOrderId = contentObj.getSortOrder()[i];
            const temp = contentObj.findInDivs( sortOrderId  );
            if (temp != null) {
            rez.push(temp);    
            }
   } 
  return rez;
 }
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
    // debugger;
    const data =  divData(); 
    //  if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content.divs = [...questions[questionIndex].content.divs, data];

            questions[questionIndex].content.sortOrder = [...questions[questionIndex].content.sortOrder , data.id];
            
            console.log('questions' ,  questions);
            return questions;
        });

    // } else {
        // toast.push('Max number of items reached as question content');
    // }
//    prep = getItem( ); 
}
function addList(){
    debugger;
    const data =  listData(); 
    //  if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content.lists = [...questions[questionIndex].content.lists, data];

            questions[questionIndex].content.sortOrder = [...questions[questionIndex].content.sortOrder , data.id];
            
            // console.log('questions' ,  questions);
            return questions;
        });

    // } else {
        // toast.push('Max number of items reached as question content');
    // }
//    prep = getItem( ); 
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
<div class='flex justify-center'>
<BtnWIconSm icon={Icons.NOTES} bgColor ="bg-gray-900"
clk={()=>show = !show} >Content Editor</BtnWIconSm>  
</div>

{ #if show }
{ #if formatted }

<div class='flex  bg-stone-700 mx-10  p-1 m-1  mt-0' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  
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

    {#each formatted as item}
    <Display contentItem={item}  />
            
        {#if displayEdit}
        <!-- <Editor contentItem={getItemById(content,sort)}  {questionIndex}  {moveDown} {moveUp} {deleteDiv}/> -->
        {/if}
    {/each}
</div>

{/if}
{/if}


