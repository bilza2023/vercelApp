<script>
//@ts-nocheck
export let item;
export let content;
let show = true;
import {FormRow} from '$lib/cmp';
import DivDsiplay from "./DivDsiplay.svelte";
</script>


<DivDsiplay  {item} {content} />

<div><button on:click={()=> show = !show} class='text-2xl'>...</button></div>

{#if show}
<!-- <div class='flex flex-col justify-center bg-stone-600 overflow-y-auto pb-4' style="max-height: 300px;"> -->
<div class='flex flex-col justify-center bg-stone-600'>
<div class="overflow-y-auto pb-4" style="max-height: 300px;">

<FormRow title="Background Color">
<input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.bgColor} />
</FormRow>

<FormRow title="Border Color">
<input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.borderColor} />
</FormRow>

<FormRow title= {`Border Width: ${item.borderWidth}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.borderWidth} min=0 max=100/>
</FormRow>

<FormRow title= {`Font Size: ${item.fontSize}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.fontSize} min=0 max=200/>
</FormRow>
<!-- marginX & Y -->

<FormRow title= {`Margin X: ${item.marginX}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.marginX} min=0 max= 500/>
</FormRow>

<FormRow title= {`Margin Y: ${item.marginY}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.marginY} min=0 max= 50/>
</FormRow>

<FormRow title= 'Text Alignment'>
<select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.textAlign} >
  <option value="justify">justify</option>
  <option value="left" selected>Left</option>
  <option value="right">Right</option>
  <option value="center">Center</option>
</select>
</FormRow>



</div>
</div>
{/if}