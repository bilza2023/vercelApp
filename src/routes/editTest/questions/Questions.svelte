<script>
// @ts-nocheck
import {Icons, fade} from '$lib/util';
import { SectionHeadIcon,FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import QuestionContentEditor from '../QuestionContentEditor.svelte';
import Content from '../Content.svelte';

import { questionsStore } from '../store';
    import QuestionSettings from './QuestionSettings.svelte';

$:questions = $questionsStore;
export let quizObj;


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

        <SectionHeadIcon title={getTitle(question.content)}  ser={questionIndex+1}  deleteFn ={()=>quizObj.questions.delete(question.id)}>
          
          <!-- ****************************************** -->
        <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >

        <!-- ****************************************** -->
          
          <!-- <Content {questions}  contentData={question.content} /> -->
          <QuestionContentEditor  {questionIndex}   />  
        <!-- ****************************************** -->
          <!-- <QuestionSettings  contentFields={question.content} />   -->
          
          </div>
        </SectionHeadIcon>
        <br/>
        {/each}
        {/if}

