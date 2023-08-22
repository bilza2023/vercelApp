<script>
//@ts-nocheck
import {Icons,fade} from '$lib/util';
export let displayEdit=false;
// export let redraw;
export let toggleShowEditor;


</script>

<div class='flex  bg-stone-700 mx-10  p-1 m-1  mt-0' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={toggleShowEditor} >
        {Icons.EYE}
    </button>

     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>{}}>
        {Icons.NOTES}
    </button>
    <!--
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
    </button> -->

</div>