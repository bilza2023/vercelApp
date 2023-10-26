I am displaying data in my svelte components

data.js

export default async function getData(){
 
 return   [
    {startTime : 2 , endTime :10 , code:'2^2', type:'code'},
    {startTime : 4 , endTime :10 , code:'2^2', type:'text'},
    {startTime : 6 , endTime :10 , code:"[['3','4'],['4','Ok']]", type:'table'},
    {startTime : 11 , endTime :20 , code:'2^2', type:'code'},
    {startTime : 15 , endTime  :20 , code:'Text', type:'text'},
    {startTime : 17 , endTime  :20 , code:'Random Text', type:'text'},

];

}
here is +page.svelte
<script>
import {onMount} from '$lib/util';
import getData from "./data.js";
import SidePanel from "$lib/SidePanel/SidePanel.svelte";

let data;
let runningTime=0;
onMount(async()=>{
data = await getData();
    setInterval(increment,1000);
});

function increment(){
    runningTime +=1;
    console.log("runningTime" ,runningTime);
}
</script>


{#if data}
<SidePanel {data} {runningTime}/>
{/if}

here is SidePanel.svelte
<script>
//@ts-nocheck
import Katex from 'svelte-katex'
import Table from './Table.svelte';
import TableCode from './TableCode.svelte';

export let runningTime=0;
export let data;
</script>


<div class='justify-center line-clamp-4 text-yellow-300'>
<div class='w-full  rounded-md m-1 p-1  text-center'>
{#each data as item}
{#if (item.startTime >  runningTime && item.endTime < runningTime)}    

 <div class='flex justify-center '>

    {#if item.type == undefined || item.type == 'txt' || item.type == 'text'}
        <p class="bg-stone-700 p-2 m-1 rounded-md">{item.code}</p>
    {/if}

    {#if item.type == 'code'}
        <div class="bg-stone-900 p-2 m-1 rounded-md">    
        <Katex>{item.code}</Katex>
        </div>
    {/if}

    {#if item.type == 'img' || item.type == 'image'}
        <img src= "/mathImages/{item.code}.png" alt="Not found">
    {/if}
    
    {#if item.type == 'table' || item.type == 'tbl'}
        <!-- <img src={item.code} alt="Not found"> -->
        <Table code={item.code}/>
    {/if}
    
    {#if item.type == 'tableCode' }
        <!-- <img src={item.code} alt="Not found"> -->
        <TableCode code={item.code}/>
    {/if}
   
    {#if item.type == 'html'}
        <div>
        {@html item.code }
        </div>
    {/if}

</div>

{/if}
{/each}
</div>
</div>

I am incrementing the runningTime in +page.svelte BUT can not see the change in SidePanel WHY?
