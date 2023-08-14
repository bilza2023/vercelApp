<script>
// @ts-nocheck
import {Icons, fade} from '$lib/util';
import { SectionHeadIcon,FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import QuestionContentEditor from '../QuestionContentEditor.svelte';
import Options from './Options.svelte';

import { questionsStore } from '../store';
    import QuestionSettings from './QuestionSettings.svelte';

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

        <SectionHeadIcon title={getTitle(question.content)}  ser={questionIndex+1}  deleteFn ={()=>deleteQuestion(question.id)} >
          
          <!-- ****************************************** -->
        <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >

        <!-- ****************************************** -->
          

          <QuestionContentEditor  {questionIndex}   />  
        <!-- ****************************************** -->
          <QuestionSettings  {question}   />  
          
          </div>
        </SectionHeadIcon>
        <br/>
        {/each}
        {/if}

