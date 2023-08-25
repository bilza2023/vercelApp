<script>
// @ts-nocheck
import {Icons, fade} from '$lib/util';
import { SectionHeadIcon,FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import QuestionContentEditor from '../question/QuestionContentEditor.svelte';
import Content from '../Content.svelte';
import {Display} from '$lib/ContentEditor';
import { questionsStore } from '../store';
import QuestionSettings from './QuestionSettings.svelte';
import Options from './Options.svelte';
import deleteQuestion from '../fn/deleteQuestion';


export let quiz;


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

function getQuestionTitle(question){
 // debugger;
  if (question.content.divs.length > 0){
    return question.content.divs[0].payload;
  }
return 'Add Title';  
}

</script>

{#if quiz.questions.length > 0}

{#each quiz.questions  as question}
          
<!-- ****************************************** -->
<SectionHeadIcon title={getQuestionTitle(question)} deleteFn={()=>deleteQuestion(quiz,question.id)}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
  class="border-2 border-gray-500 p-1 m-2 mt-0" >

<div class="flex justify-center"><button class="bg-gray-900 p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200">📋&nbsp;
Content</button></div>

<div class='bg-gray-900 m-1 p-4 py-6  rounded-md mb-4'>
  <Display  contentObj={question.content}  />
</div>


<div class="flex justify-center"><button class="bg-gray-900 p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200">📋&nbsp;
Options</button></div>

<div class='bg-gray-900 m-1 p-4 rounded-md mb-4'>
<Options  {question}/>
</div>
</SectionHeadIcon>
<br/>
{/each}
{/if}

