<script>
//@ts-nocheck
import getDivItem  from "./div/getDivItem";

import DivComp from "./div/DivComp.svelte";
import DivDsiplay from "./div/DivDsiplay.svelte";
import {toast,onMount} from '$lib/util';

// import {itemsStore} from './div/store'
// $: items = $itemsStore;

let displayEdit = true;
let items = [];

onMount  (async ()=>{
 items = [...items, getDivItem() ];
});


function returnContent(content){
console.log("content",content)
}
function addDiv(){
    // debugger;
    if (items.length < 10){
        items = [...items, getDivItem() ];
        console.log(items);
    }else {
        toast.push('Max number of items reached as question content')
    }
}
</script>

<div class='flex gap-2 bg-gray-600 mx-10 rounded-md'>
    <button 
    class='rounded-md bg-stone-400 p-2 m-2'
    on:click={()=>displayEdit = !displayEdit}>Edit Mode</button>
    </div>


<div class='bg-gray-900 p-4 m-10 rounded-md border-2 border-gray-600'>

{#if items.length > 0}

{#if displayEdit}
    {#each items as item,index }
    <DivComp {item} {returnContent}/>
    {/each}

{:else}
    {#each items as item }
    <DivDsiplay {item} />
    {/each}
{/if}

{/if}
  

</div>

  <div class='flex gap-2 bg-gray-600 mx-10 rounded-md'>
    <button 
    class='rounded-md bg-stone-400 p-2 m-2'
    on:click={addDiv}>Add Div</button>

    </div>