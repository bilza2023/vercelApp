<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
import {onMount} from '$lib/util';
export let eqs;
export let runningTime;
let currentEqSp;
$:{
        runningTime;
        setCurrentEq();
}
function setCurrentEq(){
 for (let i = 0; i < eqs.length; i++) {
 const eq = eqs[i];
        if (runningTime >= eq.eqStartTime && runningTime < eq.eqEndTime ){
       currentEqSp = eq.sp;
        return; 
        }
 }
}

onMount(()=>{
        if(eqs.length  > 0){
        currentEqSp = eqs[0].sp;
        }else {
        currentEqSp = null;
        }
});
</script> 
{#if currentEqSp}
<div class='justify-center line-clamp-4 text-yellow-300'>
   
        <div class='w-full  rounded-md m-1 p-1  text-center'>
                {#each currentEqSp as eq}    
                <ImgCodeTxt {eq} />        
                {/each}
        </div>

</div>
{/if}
