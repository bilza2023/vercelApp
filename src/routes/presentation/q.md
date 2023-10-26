The change in +page.svelte to "runningTime" does not chuse a REDRAW in the Presentation.svelte WHY??

+page.svelte
<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm , BtnWIcon,FormElm,Lbl} from '$lib/cmp';
import { Icons,onMount } from '$lib/util';
import Presentation from './Presentation.svelte';
import MainNav from '$lib/appComp/MainNav.svelte';
let runningTime=0;

function gameLoop(){
runningTime = runningTime++;
}
onMount(()=>{
//  debugger;
 setInterval(gameLoop,1000);
});

</script>

<PageWrapper>
<MainNav />

<div class='flex justify-center w-full'>
<HdgWithIcon icon={Icons.BOOKS}>Presentation</HdgWithIcon>
</div>

<Presentation  {runningTime}/>




</PageWrapper>
Presentation.svelte
<script>
export let runningTime;
let isOdd;
function randomBoolean() {
  isOdd =  Math.random() < 0.5;
}
$:{
runningTime;
randomBoolean();
console.log("Running", isOdd);
}

</script>

{#if   isOdd }
<h1>is Odd {`${runningTime}`}</h1>
{:else}
<h1>Else </h1>
{/if}
