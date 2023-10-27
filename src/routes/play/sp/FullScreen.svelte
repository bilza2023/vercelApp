<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
import {onMount} from '$lib/util';
export let eqs;
export let runningTime;
let currentEqFs;
$:{
        runningTime;
        setCurrentEq();
}
function setCurrentEq(){
 for (let i = 0; i < eqs.length; i++) {
 const eq = eqs[i];
        if (runningTime >= eq.eqStartTime && runningTime < eq.eqEndTime ){
       currentEqFs = eq.fs;
        return; 
        }
 }
}

onMount(()=>{
        if(eqs.length  > 0){
        currentEqFs = eqs[0].fs;
        }else {
        currentEq = null;
        }
});
</script> 
{#if currentEqFs}
<div class='justify-center line-clamp-4 text-yellow-300'>
   
        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
                {#each currentEqFs as eq}    
                <ImgCodeTxt {eq} />        
                {/each}
        </div>

</div>
{/if}
