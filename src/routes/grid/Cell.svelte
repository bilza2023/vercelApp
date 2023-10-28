
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

 <div class=  "hover:cursor-pointer   border-2  text-center flex items-center justify-center" 
  style= {`
            min-width: 70px;
            min-height: 70px;
            font-size : ${global.fontSize}em;
            margin : ${global.margin}px;
            padding : ${global.padding}px;
            color : ${cell.color};
        `}
 
 >
{cell.content},
{cell.color}

</div>
