<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import {Icons} from '$lib/util';

export let content;
export let redraw;

// export let moveDown;
// export let moveUp;
// export let deleteDiv;

let show = true;

function handleFieldInput(field, event) {
  content[field] = event.target.value;

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


    <!-- <button 
        class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
        on:click={()=>moveUp(contentIndex)} >
        {Icons.UP}
    </button>

    <button 
        class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
        on:click={()=>moveDown(contentIndex)} >
        {Icons.DOWN}
    </button>

    <button 
        class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
        on:click={()=>deleteDiv(contentIndex)} >
        {Icons.CROSS}
    </button> -->
 </div>


{#if show}
 <!-- Edit Control -->
<div class='bg-gray-800 p-4 m-10 mt-0 mb-2  rounded-md border-2 border-gray-600' style="max-height: 200px; overflow-y: auto;">

<!-- this is not each just an if--why??? -->
    <FormRow title="Content">
    <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" 
    value={content.payload}
    on:input={ e =>handleFieldInput('payload',e)}
    
    />
    </FormRow>
    
<!--     
    <FormRow title="Background Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].bgColor} />
    </FormRow>

    <FormRow title="Font Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].fontColor} />
    </FormRow>


    <FormRow title="Border Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].borderColor} />
    </FormRow>

    <FormRow title= {`Border Width: ${$questionsStore[questionIndex].content[contentIndex].borderWidth}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].borderWidth} min=0 max=100/>
    </FormRow>

    <FormRow title= {`Font Size: ${$questionsStore[questionIndex].content[contentIndex].fontSize}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].fontSize} min=0 max=200/>
    </FormRow>

    <FormRow title= 'Text Alignment'>
    <select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].textAlign} >
    <option value="justify">justify</option>
    <option value="left" selected>Left</option>
    <option value="right">Right</option>
    <option value="center">Center</option>
    </select>
    </FormRow>

  marginX & Y

    <FormRow title= {`Margin X: ${$questionsStore[questionIndex].content[contentIndex].marginX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].marginX} min=0 max= 500/>
    </FormRow>

    <FormRow title= {`Margin Y: ${$questionsStore[questionIndex].content[contentIndex].marginY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].marginY} min=0 max= 50/>
    </FormRow>

  paddingX & Y 

    <FormRow title= {`Padding X: ${$questionsStore[questionIndex].content[contentIndex].paddingX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].paddingX} min=0 max= 300/>
    </FormRow>

    <FormRow title= {`Padding Y: ${$questionsStore[questionIndex].content[contentIndex].paddingY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].paddingY} min=0 max= 300 step=0.1 />
    </FormRow>

    <FormRow title= {`Opacity: ${$questionsStore[questionIndex].content[contentIndex].opacity}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].opacity} min=0 max= 1 step=0.1/>
    </FormRow>

    <FormRow title= {`Border Radius: ${$questionsStore[questionIndex].content[contentIndex].borderRadius}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].borderRadius} min=0 max=100 step=1/>
    </FormRow> -->


</div>

{/if}