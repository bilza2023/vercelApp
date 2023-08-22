<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import {Icons} from '$lib/util';

export let contentItem;
export let redraw;
export let moveUp;
export let moveDown;
export let deleteItem;

// export let moveDown;
// export let moveUp;
// export let deleteDiv;

let show = false;

function handleFieldInput(field ,event) {
  // contentItem[field] = event.target.value;
  // debugger;
  if (redraw) {
    redraw();
  }
}
</script>

<!-- top bar -->
 <div class='flex justify-center items-center    mx-auto w-6/12  rounded-lg m-1  border-2 border-gray-600'>

    <button  class='p-1 m-1 text-xs hover:bg-stone-700 rounded-lg'
        on:click={()=>show = !show}>{Icons.EYE}
    </button>


    <button 
        class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
        on:click={()=>moveUp(contentItem.id)} >
        {Icons.UP}
    </button>

    <button 
        class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
        on:click={()=>moveDown(contentItem.id)} >
        {Icons.DOWN}
    </button>

    <button 
        class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
        on:click={()=>deleteItem(contentItem.id)} >
        {Icons.CROSS}
    </button>
 </div>


{#if show}
 <!-- Edit Control -->
<div class='bg-gray-800 p-4 m-10 mt-0 mb-2  rounded-md border-2 border-gray-600' style="max-height: 200px; overflow-y: auto;">

<!--- this is not each just an if--why??? --->
    <FormRow title="Content">
    <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" 
    bind:value={contentItem.payload}
    on:input={ e =>handleFieldInput('payload' ,e)}
     
    />
    </FormRow>
    
     
    <FormRow title="Background Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.bgColor} />
    </FormRow>

    <FormRow title="Font Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.fontColor} />
    </FormRow>


    <FormRow title="Border Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.borderColor} />
    </FormRow>

    <FormRow title= {`Border Width: ${contentItem.borderWidth}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.borderWidth} min=0 max=100/>
    </FormRow>

    <FormRow title= {`Font Size: ${contentItem.fontSize}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.fontSize} min=0 max=200/>
    </FormRow>

    <FormRow title= 'Text Alignment'>
    <select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.textAlign} >
    <option value="justify">justify</option>
    <option value="left" selected>Left</option>
    <option value="right">Right</option>
    <option value="center">Center</option>
    </select>
    </FormRow>

  <!-- marginX & Y -->

    <FormRow title= {`Margin X: ${contentItem.marginX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.marginX} min=0 max= 500/>
    </FormRow>

    <FormRow title= {`Margin Y: ${contentItem.marginY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.marginY} min=0 max= 50/>
    </FormRow>

  <!-- paddingX & Y  -->

    <FormRow title= {`Padding X: ${contentItem.paddingX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.paddingX} min=0 max= 300/>
    </FormRow>

    <FormRow title= {`Padding Y: ${contentItem.paddingY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.paddingY} min=0 max= 300 step=0.1 />
    </FormRow>

    <FormRow title= {`Opacity: ${contentItem.opacity}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.opacity} min=0 max= 1 step=0.1/>
    </FormRow>

    <FormRow title= {`Border Radius: ${contentItem.borderRadius}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.borderRadius} min=0 max=100 step=1/>
    </FormRow>


</div>

{/if}