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
    // console.log("start");
  isPlaying = true;
  interval = setInterval(updateTimeDiff,1000);  
  startTime = Date.now();  
}

function stop(){ 
    isPlaying = false;
    clearInterval(interval);
    runningTime =  0;
    startTime =  0;
}
function updateTimeDiff() {
    // debugger;
    console.log("updateTimeDiff");
    const currentTime = Date.now();
    const timeDiff = currentTime - startTime;
    runningTime = Math.floor(timeDiff / 1000);
    //============
     for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.cells.length; j++) {
         const cell = row.cells[j];
         cell.blc = borderColor(cell.bl);
         cell.btc = borderColor(cell.bt);
         cell.brc = borderColor(cell.br);
         cell.bbc = borderColor(cell.bb);
         //--
         cell.color = getColor(cell.startTime);
      }
   }
   rows = [...rows];
}


function getColor(startTime) {
   if (!isPlaying ){
                console.log("isPlaying",isPlaying);
         return global.cellFontColor;
   }else {
          if (startTime <=  runningTime) {
                console.log("global.cellFontColor",global.cellFontColor);
               return global.cellFontColor;
         }else {
                console.log("global.bgColor",global.bgColor);
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