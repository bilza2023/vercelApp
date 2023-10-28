<script>
//@ts-nocheck
import Cell from "./Cell.svelte";

export let rows;
export let global;;
// import Katex from "svelte-katex";
import {runningTime,isPlayingStore} from "./store";

$:isPlaying = $isPlayingStore;
$:rTime = $runningTime;



</script>




{#if rows}
<div class="flex justify-center  p-1 w-8/12 border-2 border-red-800 items-start" 
    style="background-color : {global.bgColor}"
    >

<table class=" p-0 m-0 " >
{#each rows as row, rowIndex}
    
    <tr class="m-0 p-0">
    {#each row as cell, cellIndex}
            <td class="m-0 p-0  " >

        <Cell {global} {cell} />    
       
        </td>
    {/each}
    </tr>
    
{/each}
</table>

</div>
{/if}
