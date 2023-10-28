
<script>
//@ts-nocheck
import {runningTime,isPlayingStore} from "./store";

$:isPlaying = $isPlayingStore;
$:rTime = $runningTime;
export let global;
export let cell;

$:{
        rTime;
        console.log("runningTime -from-cell",rTime);
        cell.color = getColor(cell.startTime);
        cell.blc = borderColor(cell.bl);
        cell.btc = borderColor(cell.bt);
        cell.brc = borderColor(cell.br);
        cell.bbc = borderColor(cell.bb); 

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
function getColor(startTime) {
    // debugger;
   if (!isPlaying ){
                // console.log("isPlaying",isPlaying);
         return global.cellFontColor;
   }else {
          if (startTime <=  rTime) {
                // console.log("global.cellFontColor",global.cellFontColor);
               return global.cellFontColor;
         }else {
                // console.log("global.bgColor",global.bgColor);
            return global.bgColor; 
         }
   }
}
</script>

 <div class=  " border-2  text-center flex items-center justify-center" 
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
{cell.content}
</div>
