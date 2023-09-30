<script>
import { PageWrapper } from "$lib/cmp";
import { onMount } from "$lib/util";
import getTableData from "./demo";

let calcData = { rows: [] };
let originalData = { rows: [] };
let interval = null;
let startTime = null;
let runningTime = null;
let timeDiff = 0;

onMount(async () => {
    originalData = await getTableData();
    calcData = { rows: [] }; // Initialize calcData with an empty array
    startTime = Date.now();
    interval = setInterval(updateTimeDiff, 1000);
});

function updateTimeDiff() {
const currentTime = Date.now();
timeDiff = currentTime - startTime;
// Calculate runningTime if needed, for example, in seconds:
runningTime = Math.floor(timeDiff / 1000);
// updateData(runningTime);
}

function updateData(runningTime) {
calcData.rows = [];
for (let i = 0; i < originalData.rows.length; i++) {
    const row = originalData.rows[i];
    if (row.startTime < runningTime) {
    calcData.rows.push(row.cells);
    }
}
}
</script>


<PageWrapper>
  <br>
  <br>
  <br>

  {#if calcData && calcData.rows.length > 0}
  <div class="flex justify-center w-full">
    <table class="m-2 p-2 border-2 border-white">
      {#each calcData.rows as row}
      <tr>
        {#each row as cell}
        <td class="m-1 p-1 border-2 border-white">
            <span class={`${cell.startTime > runningTime ? "" : hidden}`}>
                {cell.content}
            </span>    
        </td>
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


<style>
.hidden {
  visibility: hidden;
}
</style>