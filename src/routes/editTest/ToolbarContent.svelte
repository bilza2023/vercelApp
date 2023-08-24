<script>
//@ts-nocheck
import {Icons,fade} from '$lib/util';
// export let displayEdit=false;
export let contentObj;
export let toggleShowEditor;
import {addDiv,addTable,addImage,addPre,addList,addYoutube} from '../../lib/quizLib/fn/addContentItems';
</script>

<div class='flex  bg-gray-700 mx-10  p-1 m-1  mt-0' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={toggleShowEditor} >
        {Icons.EYE}
    </button>

     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>addDiv(contentObj)}>
        {Icons.NOTES}
     </button>

    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>addList(contentObj)}>
        {'■'}
    </button>

     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>addTable(contentObj)}>
        {Icons.CHARTDOWN}
    </button>

     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>addImage(contentObj)}>
        {Icons.PALETTE}
    </button>

      <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>addPre(contentObj)}>
        {Icons.CODE}
    </button>
      <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>addYoutube(contentObj)}>
        {Icons.NET}
    </button>
    <!--
  
    
  
  
    -->

</div>