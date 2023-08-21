<script>
//@ts-nocheck
import {Icons,fade} from '$lib/util';
export let displayEdit=false;
export let questions;
function add(index=0,payload,arrayName){
//   debugger;
//   questions.addDiv( index , payload);
    questions.addDiv( 0 , 'Ghair Kanooni');
  console.log('quiz.questions.getDivs()',questions.getDivs(0));
}


</script>

{#if questions}
<div class='flex  bg-stone-700 mx-10  p-1 m-1  mt-0' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>displayEdit = !displayEdit} >
        {Icons.EYE}
    </button>

    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add(0,'sasaxsxdcdcfvgb')}>
        {Icons.NOTES}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={questions.addList}>
        {'■'}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={questions.addTable}>
        {Icons.CHARTDOWN}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={questions.addPre}>
        {Icons.CODE}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={questions.addYoutube}>
        {Icons.NET}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={questions.addImage}>
        {Icons.PALETTE}
    </button>

</div>
{/if}