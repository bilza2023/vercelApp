<script>
import Cell from "./Cell.svelte";
export let gridData;
export let runningTime;
</script>


<div class= "w-8/12 min-h-screen p-2  m-0 overflow-x-auto"  >
{#if gridData && gridData.rows && gridData.rows.length > 0}
<div class="flex justify-center w-full">
<table class={`m-2 p-2 table_bg`}
    style = {`background-color : ${gridData.bgColor}`}
>
    {#each gridData.rows as row}
    <tr>
    {#each row.cells as cell}
    <Cell {cell} {runningTime} bgColor={gridData.bgColor} bgIntensity={gridData.bgIntensity}/>
    
    {/each}
    </tr>
    {/each}
</table>
</div>
{/if}
</div>
