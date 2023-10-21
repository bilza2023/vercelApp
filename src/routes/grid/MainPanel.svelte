<script>
import Grid from "./Grid.svelte";
import getTableData from "./demo.js";
import {onMount} from '$lib/util';

let global = {bgColor: "#111827", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }

let rows;
onMount(async () => {
  const tableData = await getTableData();
  rows = tableData.rows;
});

</script>

<div class="w-9/12 min-h-screen " style= {`background-color : ${global.bgColor}`}>

<Grid {global} {rows}/>
</div>