Here is my svelte app. I want the color of the "rows.cell.content"  to change when it is play vs not playing in Grid.svelte. But nothing happens WHY?
demo.js


export default async function  getTableData() {
return {
bgColor : "#293749",
fontSize : 1,
rows : [

            {
            startTime : 0,
            endTime : 100 ,
            cells : [
                    {content : "2^4" ,startTime : 2,endTime : 0 , bt : true,bl:false,br:true,bb:false , bt : true,bl:false,br:true,bb:false},
                    {content : "\\frac{3}{4}",startTime : 4,endTime : 0 , bt : true,bl:false,br:true,bb:false},
                    {content : "\\sqrt{345345}",startTime : 6,endTime : 0 , bt : true,bl:false,br:true,bb:false},
                ]
            },
            {
            startTime : 0,
            endTime : 100 ,
            cells : [
                    {content : "\\frac{3}{\\sqrt{333}}" ,startTime : 8,endTime : 0 , bt : true,bl:false,br:true,bb:false , bt : true,bl:false,br:true,bb:false},
                    {content : "\\frac{44}{88}",startTime : 10,endTime : 0 , bt : true,bl:false,br:true,bb:false},
                    {content : "\\sqrt{555}",startTime : 12,endTime : 0 , bt : true,bl:false,br:true,bb:false},
                ]
            },
            
]

};


}

MainPanel.svelte
<script>
import Grid from "./Grid.svelte";
import getTableData from "./demo.js";
import {onMount} from '$lib/util';

let global = {bgColor: "#293544", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }

let rows;
onMount(async () => {
  const tableData = await getTableData();
  rows = tableData.rows;
});

</script>

<div class="bg-gray-900 w-9/12 min-h-screen ">

<Grid {global} {rows}/>
</div>

Grid.svelte
<script>
//@ts-nocheck

import Katex from "svelte-katex";
export let rows;
export let global;

let runningTime = 0;
let startTime = 0;
let isPlaying = false;
let interval = null;

function start(){
  isPlaying = true;
  interval = setInterval(updateTimeDiff,1000);  
  startTime = Date.now();  
}

function stop(){ 
    isPlaying = false;
    clearInterval(interval);
    runningTime =  0;
}
function updateTimeDiff() {
    // debugger;
    const currentTime = Date.now();
    const timeDiff = currentTime - startTime;
    runningTime = Math.floor(timeDiff / 1000);
    // console.log('runningTime' , get(runningTime))
}


function getColor(startTime,content) {
   if (!isPlaying ){
         return global.cellFontColor;
   }else {
          if (startTime <=  runningTime) {
               return global.cellFontColor;
         }else {
            return global.bgColor; 
         }
   }
}

function borderColor(tf){
 // debugger;
    if (tf==true){
        return global.cellBorderColor;
    }else{
        if (global.showGrid == true){
         return global.gridColor;
        }else {
         return global.bgColor;
        } 
    }
}


$:{
 runningTime;
 if (rows){
   for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.length; j++) {
         const cell = row[j];
         cell.blc = borderColor(cell.bl);
         cell.btc = borderColor(cell.bt);
         cell.brc = borderColor(cell.br);
         cell.bbc = borderColor(cell.bb);
         //--
         cell.color = getColor(cell.startTime,cell.content);
      }
   }
   rows = [...rows];
 }
}
</script>
<div class="flex">
<button on:click={start}>Start</button>
<button on:click={stop}>Stop</button>
<h1>{runningTime}</h1>
</div>

{#if rows}
<div class="flex w-full justify-center p-2">

<table class=" p-0 m-0 " >
{#each rows as row, rowIndex}
    
    <tr class="m-0 p-0">
    {#each row.cells as cell, cellIndex}
            <td class="m-0 p-0  " >
        <div
        class=  "hover:cursor-pointer   border-2  text-center flex items-center justify-center"
        
        id={`${rowIndex}-${cellIndex}`} 
        
        style= {`
            min-width: 70px;
            min-height: 70px;
            border-left-color : ${cell.blc};
            border-top-color : ${cell.btc};
            border-right-color : ${cell.brc};
            border-bottom-color : ${cell.bbc};
            font-size : ${global.fontSize}em;
            margin : ${global.margin}px;
            padding : ${global.padding}px;
            color : ${cell.color};
        `}

        >
        
            <Katex>{cell.content}</Katex>
        
        </div>
        </td>
    {/each}
    </tr>
    
{/each}
</table>

</div>
{/if}
