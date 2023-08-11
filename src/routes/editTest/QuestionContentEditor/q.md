Here is a problem regarding passing data between svelte components

- I have page.svelte which has "content" data which is a svelte store variable.
- page.svelte has a child QuestionContentEditor.svelte which gets the "content" data.
- The QuestionContentEditor has 2 child elements DivDisplay and DivEditor both gets the "content" data. 

Problem :
1 : The DivEditor edits the data but its impact can not be seen in DivDisplay
2 : The delete , moveUp and moveDown functions needs to be chacked present in QuestionContentEditor
3 : Ensure that the edits made in DivEditor are found in page.svelte


Page.svelte
<script>
// @ts-nocheck
import {Icons, fade} from '$lib/util';
import { SectionHeadIcon,FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import {QuestionContentEditor} from '../../../lib/SkillEditor';
import Options from './Options.svelte';

import { questionsStore } from '../store';

$:questions = $questionsStore;

function deleteQuestion(id) {
    // debugger;
    questionsStore.update(questions => {
    const updatedQuestions = questions.filter(question => question.id !== id);
        return updatedQuestions;
    });
}

function getTitle(content){
 // debugger;
 try{
    if (content.length > 0){
        return content[0].content;
    }else {
        return 'No Content Yet';
    }
 }catch(e){
        return 'No Content Yet';
    }
}

</script>

        {#if  questions }  
        {#each questions as question, questionIndex }  

        <SectionHeadIcon title={getTitle(question.content)}  ser={questionIndex+1}  deleteFn ={()=>deleteQuestion(question.id)}
         >
          
          <!-- ****************************************** -->
          <!-- ****************************************** -->
        <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >


        <!-- ****************************************** -->
          <BtnWIconSm icon={Icons.NOTES} bgColor ="bg-gray-900">Content Editor</BtnWIconSm>  

          <QuestionContentEditor  content={question.content}   />  
          
          
          <BtnWIconSm bgColor ="bg-gray-900" icon={Icons.QUESTIONMARK}>Question Settings</BtnWIconSm>

          <FormRow title="Multi Select">
          <Tf obj={question} bool_prop="multiSelect"  />
          </FormRow>

          <FormRow title="Explanation">
          <textarea class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
              bind:value={question.explanation}></textarea>
          </FormRow>

          <br/>


          <div class="text-center">
                  <Options {question} />
              <br/>
          </div>

          </div>

          <!-- ****************************************** -->
          <!-- ****************************************** -->
        </SectionHeadIcon>
        <br/>
        {/each}
        {/if}


QuestionContentEditor.svelte
<script>
//@ts-nocheck
// -8/Aug-2023 QuestionContentEditor : This is just one of the many possible wiringup of Displays and Editors. We can have many such arragements. This is specifically for creating content for Questions. We can have a different such arrangement for "Web Page Builder" but the base components like DivEditor or DivDisplay remains the same.

import getDivItem  from "../div/divData";
import DivDisplay from "../div/DivDisplay.svelte";
import DivEditor from "../div/DivEditor.svelte";
import {Icons} from '$lib/util';
// import {questionsStore,itemStore} from '../../store';


export let MaxNumberOfItems = 10;
export let displayEdit = false;
export let content;

function deleteDiv(contentIndex) {
    content = content.splice(contentIndex, 1);
}

function moveUp(contentIndex) {
    if (contentIndex > 0) {
        const newContent = [...content];
        [newContent[contentIndex], newContent[contentIndex - 1]] = [newContent[contentIndex - 1], newContent[contentIndex]];
        content = newContent;
    }
}

function moveDown(contentIndex) {
    if (contentIndex < content.length - 1) {
        const newContent = [...content];
        [newContent[contentIndex], newContent[contentIndex + 1]] = [newContent[contentIndex + 1], newContent[contentIndex]];
        content = newContent;
    }
}

function addDiv(){
    // debugger;
    if (content.length < MaxNumberOfItems){
        const newItems = [...content, getDivItem() ];
         content = newItems;
    }else {
        console.error('Max number of items reached as question content')
    }
}

</script>
 <!-- top bar -->
<div class='flex  bg-stone-700 mx-10  p-1 m-1  mt-0'>
  
    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={()=>displayEdit = !displayEdit} >
        {Icons.EYE}
    </button>

    <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addDiv}>
        {Icons.NOTES}
    </button>

</div>



<!-- middle bar -->
<div class='bg-gray-900 p-4 mx-10 my-0  border-2 border-gray-600'>


{#if content.length > 0}

    {#each content as contentItem , contentIndex }
    <DivDisplay {contentItem} />
            
    {#if displayEdit}
    <DivEditor  {contentItem}  {contentIndex} {moveDown} {moveUp} {deleteDiv}/>
    {/if}

    {/each}
{:else}
<p class='p-1 m-1 text/sm'>No Content Items added</p>
{/if}
</div>


DivDisplay.svelte
<script>
//@ts-nocheck
// export let data;
// export let data;
export let contentItem


</script>
{#if contentItem}
<!-- {#each items as contentItem} -->
<div
  style:padding="{contentItem.paddingY}px {contentItem.paddingX}px"
  style:margin="{contentItem.marginY}px {contentItem.marginX}px"
  style:opacity="{contentItem.opacity}"
  style:border="{contentItem.borderWidth}px {contentItem.borderStyle} {contentItem.borderColor}"
  style:border-radius="{contentItem.borderRadius}px"
  style:background-color="{contentItem.bgColor}"
  style:color="{contentItem.fontColor}"
  style:font-style="{contentItem.fontStyle}"
  style:font-size="{contentItem.fontSize}px"
  style:font-weight="{contentItem.fontWeight}"
  style:text-align="{contentItem.textAlign}"
>
{contentItem.content}
</div>

<!-- {/each} -->
{/if}

DivEditor.svelte
<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import {Icons} from '$lib/util';

export let contentItem;
export let contentIndex;

export let moveDown;
export let moveUp;
export let deleteDiv;

let show = false;

</script>

 <div class='flex justify-center items-center    mx-auto w-6/12  rounded-lg m-1  border-2 border-gray-600'>

    <button  class='p-1 m-1 text-xs hover:bg-stone-700 rounded-lg'
        on:click={()=>show = !show}>{Icons.EYE}
    </button>


    <button 
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
    </button>
 </div>


{#if show}
 <!-- Edit Control -->
<div class='bg-gray-800 p-4 m-10 mt-0 mb-2  rounded-md border-2 border-gray-600' style="max-height: 200px; overflow-y: auto;">



    <FormRow title="Content">
    <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.content}  />
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

 <!-- paddingX & Y -->

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