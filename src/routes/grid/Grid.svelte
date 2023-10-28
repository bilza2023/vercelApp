<script>
//@ts-nocheck
import Cell from "./Cell.svelte";
let global = {bgColor: "#111827", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }

export let rows;
// import Katex from "svelte-katex";
import {runningTime,isPlayingStore} from "./store";

$:isPlaying = $isPlayingStore;
$:rTime = $runningTime;



</script>


<div class="w-9/12 min-h-screen " style= {`background-color : ${global.bgColor}`}>


{#if rows}
<div class="flex w-full justify-center p-2">

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


</div>
