<script>
import {onMount} from '$lib/util';
import getData from "./data.js";
import SidePanel from "$lib/SidePanel/SidePanel.svelte";

let data;
let runningTime=0;
onMount(async()=>{
data = await getData();
    setInterval(increment,1000);
});

function increment(){
    runningTime +=1;
    console.log("runningTime" ,runningTime);
}
</script>


{#if data}
<SidePanel {data} {runningTime}/>
{/if}


