<script>
//@ts-nocheck
import {HdgWithIcon,Centre} from '$lib/cmp';
import {Icons} from '$lib/util';
export let board;
export let cls;
</script>

{#if board == "FBISE" && cls == "Class 8th"}
  <img class="p-1 m-1" src="./images/math_8thFBSIE.png" alt="Math FBSIE 9th" />
  <!-- <img class="p-1 m-1" src="./images/physics_9thFBSIE.png" alt="Math FBSIE 9th" /> -->
  <!-- <img class="p-1 m-1" src="./images/chemistry_9thFBSIE.png" alt="Math FBSIE 9th" /> -->
  <img class="p-1 m-1" src="./images/urdu_9thFBSIE.png" alt="Math FBSIE 9th" />
{/if}  

{#if board == "FBISE" && cls == "Class 9th"}
 <a href="/mathFBISE9th"> <img class="p-1 m-1" src="./images/math_9thFBSIE.png" alt="Math FBSIE 9th" /></a>
  <img class="p-1 m-1" src="./images/physics_9thFBSIE.png" alt="Math FBSIE 9th" />
  <img class="p-1 m-1" src="./images/chemistry_9thFBSIE.png" alt="Math FBSIE 9th" />
  <img class="p-1 m-1" src="./images/urdu_9thFBSIE.png" alt="Math FBSIE 9th" />
{/if}  

{#if board == "FBISE" && cls == "Class 10th"}
  <img class="p-1 m-1" src="./images/math_10thFBSIE.png" alt="Math FBSIE 9th" />
  <img class="p-1 m-1" src="./images/physics_10thFBSIE.png" alt="Math FBSIE 9th" />
  <img class="p-1 m-1" src="./images/chemistry_10thFBSIE.png" alt="Math FBSIE 9th" />
  <img class="p-1 m-1" src="./images/urdu_10thFBSIE.png" alt="Math FBSIE 9th" />
{/if}  


{#if board == "KPK Board" }
   <Centre>
        <HdgWithIcon bgColor='bg-red-800' icon={Icons.BULB}>Work in Progress</HdgWithIcon>
    </Centre>
{/if}  