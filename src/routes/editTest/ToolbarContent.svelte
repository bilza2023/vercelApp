<script>
//@ts-nocheck
import {Icons,fade} from '$lib/util';
// export let displayEdit=false;
// export let redraw;
export let toggleShowEditor;
export let contentObj;

</script>

<div class='flex  bg-gray-700 mx-10  p-1 m-1  mt-0' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={toggleShowEditor} >
        {Icons.EYE}
    </button>

     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>contentObj.addDiv("Content")}>
        {Icons.NOTES}
     </button>

     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>contentObj.addTable()}>
        {Icons.CHARTDOWN}
    </button>
    
    <!--
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={contentObj.addList}>
        {'■'}
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