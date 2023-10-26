<script>
import { Icons,onMount } from '$lib/util';

let runningTime=0;


function gameLoop(){
runningTime = runningTime + 1;
}

onMount(async ()=>{
//  debugger;
 setInterval(gameLoop,1000);
});
</script>


<h1>runningTime: {`${runningTime}`}</h1>
