<script>
//@ts-nocheck
let show = false;
let returnContent;
import {FormRow} from '$lib/cmp';
import DivDsiplay from "./DivDsiplay.svelte";
export let item;

</script>


<DivDsiplay  {item}/>

<div><button on:click={()=> show = !show} class='text-2xl'>...</button></div>

{#if show }
<!-- <div class='flex flex-col justify-center bg-stone-600 overflow-y-auto pb-4' style="max-height: 300px;"> -->
<div class='flex flex-col justify-center bg-stone-600'>
<div class="overflow-y-auto pb-4" style="max-height: 300px;">


<FormRow title="Content">
<input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.content} />
</FormRow>


<FormRow title="Background Color">
<input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.bgColor} />
</FormRow>

<FormRow title="Font Color">
<input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.fontColor} />
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

<FormRow title= 'Text Alignment'>
<select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.textAlign} >
  <option value="justify">justify</option>
  <option value="left" selected>Left</option>
  <option value="right">Right</option>
  <option value="center">Center</option>
</select>
</FormRow>

<!-- marginX & Y -->

<FormRow title= {`Margin X: ${item.marginX}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.marginX} min=0 max= 500/>
</FormRow>

<FormRow title= {`Margin Y: ${item.marginY}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.marginY} min=0 max= 50/>
</FormRow>

<!-- paddingX & Y -->

<FormRow title= {`Padding X: ${item.paddingX}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.paddingX} min=0 max= 300/>
</FormRow>

<FormRow title= {`Padding Y: ${item.paddingY}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.paddingY} min=0 max= 300 step=0.1 />
</FormRow>

<FormRow title= {`Opacity: ${item.opacity}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.opacity} min=0 max= 1 step=0.1/>
</FormRow>

<FormRow title= {`Border Radius: ${item.borderRadius}`}>
<input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.borderRadius} min=0 max=100 step=1/>
</FormRow>



</div>
</div>
{/if}

