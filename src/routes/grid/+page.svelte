<script>
import { PageWrapper } from "$lib/cmp";
import { onMount } from "$lib/util";
import getTableData from "./demo";
import Cell from "./Cell.svelte";
let calcData = { rows: [] };
let interval = null;
let startTime = null;
let runningTime = null;

onMount(async () => {
    calcData = await getTableData();
    startTime = Date.now();
    interval = setInterval(updateTimeDiff, 1000);
});

function updateTimeDiff() {
// debugger;
const currentTime = Date.now();
const timeDiff = currentTime - startTime;
// Calculate runningTime if needed, for example, in seconds:
runningTime = Math.floor(timeDiff / 1000);
}


</script>


<PageWrapper>
  <br>
  <br>
  <br>

  {#if calcData && calcData.rows && calcData.rows.length > 0}
  <div class="flex justify-center w-full">
    <table class={`m-2 p-2 table_bg`}
      style = {`background-color : ${calcData.bgColor}`}
    >
      {#each calcData.rows as row}
      <tr>
        {#each row.cells as cell}
        <Cell {cell} {runningTime} bgColor={calcData.bgColor} bgIntensity={calcData.bgIntensity}/>
        
        {/each}
      </tr>
      {/each}
    </table>
  </div>
  {/if}



<br>
<br>
<br>
<br>
<br>
</PageWrapper>

