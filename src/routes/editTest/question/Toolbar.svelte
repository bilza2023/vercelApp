<script>
//@ts-nocheck
import {fade  , Icons } from '$lib/util';
import { divData, listData, tableData, preData, youtubeData, imageData} from '$lib/SkillEditor';
let displayEdit;
export let add;
</script>

<div class='flex  bg-stone-700 mx-10  p-1 m-1  mt-0' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>displayEdit = !displayEdit} >
        {Icons.EYE}
    </button>

    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add( 'divs' , divData() )}>
        {Icons.NOTES}
    </button>
     <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add('lists' , listData())}>
        {Icons.CHARTDOWN}
    </button>

    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add('images' , imageData())}>
        {'■'}
    </button>
   
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add('pres' , preData())}>
        {Icons.CODE}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add('tables' , tableData())}>
        {Icons.NET}
    </button>
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>add('youtubes' , youtubeData())}>
        {Icons.PALETTE}
    </button>

</div>
