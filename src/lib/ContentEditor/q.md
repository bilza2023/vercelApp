I have 3 svelte components
Page.svelte : Parent : which sends "content" to the child component.
Editor.svelte : Child component which gets the "content" and then select the appropriate Editor for it (in this case DivEditor).

DivEditor.svelte : Grandchild component which edits the content (at the moment we are dealing with content.payload).I am using "redraw" function from the patr

Please check all 3 components and suggest improvements in this system. I dont want to use store variables since there are many nested arrays

page.svelte 
<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading} from '$lib/cmp';
import {onMount,toast,Agent} from '$lib/util';

import Questions from './questions/Questions.svelte'
import SettingMain from './settings/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte';
import AddQuestionBar from './AddQuestionBar.svelte';
import HiddenDivs from './HiddenDivs.svelte';
import PublishErrors from './PublishErrors.svelte';
import PageSeparator from './PageSeparator.svelte';
import QuizObj from "../../lib/quizLib/quiz";
import {Display,Editor} from '$lib/ContentEditor';
import ToolbarContent from './ToolbarContent.svelte';

let quiz;;

onMount(async ()=>{
  try {
  // debugger;
    quiz = new QuizObj(138);
    quiz.addMCQ();
    quiz.questions[0].content.addDiv('Ghair Kanooni');
 } catch (e) {
       toast.push('failed to load');
    // console.error(e);
  }   
});


function printQuiz(){console.log('quiz' , quiz);}
function redraw(){quiz = quiz;}

import MainNav from '$lib/appComp/MainNav.svelte';
/////////////////////////////////////////////////////////////////
</script>
<!-- ****************************************** -->
<MainNav/>
<PageWrapper>
{#if quiz}
<button on:click={printQuiz}>Print Quiz</button>
<!-- ************** -->
<!-- <Toolbar {item} {quizObj}/> -->

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>{quiz.title}</HdgWithIcon>
        </Centre>

        <!-- <PageSeparator /> -->

        <!-- <PublishErrors /> -->
        <!-- ********** The Hidden Dialogue box **************** -->
                        
            <!-- <HiddenDivs {item} {quizObj}/> -->

        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
          <br/>          
            <!-- {#if  showQuestions} -->
            <!-- <Questions {quiz} /> -->
{#if quiz.questions.length > 0}

  {#each quiz.questions  as question}

    <ToolbarContent  {question} {redraw}/>
    <Display content={question.content.sortContent()} />
    <Editor content={question.content.sortContent()}  {redraw}/>
  {/each}
{/if}

             <br/>
            <!-- <AddQuestionBar {quizObj}/> -->
            <br/>
            <!-- {:else} -->
            <!-- <SettingMain {item}/> -->
            <!-- {/if} -->
        </div>
        
{:else}
<Loading />
{/if}

<br>
<br>
<br>
<br>
<br>
<br>
</PageWrapper>
editor.svelte
<script>
//@ts-nocheck
export let content;
export let redraw;
// export let moveDown;
// export let moveUp;
// export let deleteDiv;

import {DivEditor} from './index';
// import {ListEditor,DivEditor , TableEditor ,PreEditor , YoutubeEditor ,ImageEditor} from './index';


</script>

{#each content as contentItem}
{#if contentItem.type == 'div'}
<DivEditor  {contentItem} {redraw}/>
{/if}
<!-- 
{#if contentItem.type == 'list'}
<ListEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'table'}
<TableEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'pre'}
<PreEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'youtube'}
<YoutubeEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'image'}
<ImageEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if} -->

{/each}

DivEditor.svelte
<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import {Icons} from '$lib/util';

export let contentItem;
export let redraw;

// export let moveDown;
// export let moveUp;
// export let deleteDiv;

let show = true;

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
    bind:value={contentItem.payload}
    on:input={ e =>handleFieldInput('payload' ,e)}
     
    />
    </FormRow>
    
<!--     
    <FormRow title="Background Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].bgColor} />
    </FormRow>

    <FormRow title="Font Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].fontColor} />
    </FormRow>


    <FormRow title="Border Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].borderColor} />
    </FormRow>

    <FormRow title= {`Border Width: ${$questionsStore[questionIndex].contentItem[contentIndex].borderWidth}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].borderWidth} min=0 max=100/>
    </FormRow>

    <FormRow title= {`Font Size: ${$questionsStore[questionIndex].contentItem[contentIndex].fontSize}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].fontSize} min=0 max=200/>
    </FormRow>

    <FormRow title= 'Text Alignment'>
    <select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].textAlign} >
    <option value="justify">justify</option>
    <option value="left" selected>Left</option>
    <option value="right">Right</option>
    <option value="center">Center</option>
    </select>
    </FormRow>

  marginX & Y

    <FormRow title= {`Margin X: ${$questionsStore[questionIndex].contentItem[contentIndex].marginX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].marginX} min=0 max= 500/>
    </FormRow>

    <FormRow title= {`Margin Y: ${$questionsStore[questionIndex].contentItem[contentIndex].marginY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].marginY} min=0 max= 50/>
    </FormRow>

  paddingX & Y 

    <FormRow title= {`Padding X: ${$questionsStore[questionIndex].contentItem[contentIndex].paddingX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].paddingX} min=0 max= 300/>
    </FormRow>

    <FormRow title= {`Padding Y: ${$questionsStore[questionIndex].contentItem[contentIndex].paddingY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].paddingY} min=0 max= 300 step=0.1 />
    </FormRow>

    <FormRow title= {`Opacity: ${$questionsStore[questionIndex].contentItem[contentIndex].opacity}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].opacity} min=0 max= 1 step=0.1/>
    </FormRow>

    <FormRow title= {`Border Radius: ${$questionsStore[questionIndex].contentItem[contentIndex].borderRadius}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].contentItem[contentIndex].borderRadius} min=0 max=100 step=1/>
    </FormRow> -->


</div>

{/if}