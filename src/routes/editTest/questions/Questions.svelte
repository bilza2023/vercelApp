<script>
// @ts-nocheck
import {Icons, fade} from '$lib/util';
import { FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import SkillEditor from './SkillEditor/SkillEditor.svelte';
import { SectionHeadIcon } from '$lib/cmp';
import Options from './Options.svelte';
import { questionsStore } from '../store';

$:questions = $questionsStore;

export let deleteQuestion;



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

        <SectionHeadIcon title={getTitle(question.content)}  ser={questionIndex+1} 
        deleteFn ={()=>deleteQuestion(question.id)}
         >
          
          <!-- ****************************************** -->
          <!-- ****************************************** -->
          <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >


          <!-- ****************************************** -->
          <BtnWIconSm icon={Icons.NOTES}>Content Editor</BtnWIconSm>  

          <SkillEditor  {questionIndex}   />  
          
          
          <BtnWIconSm icon={Icons.QUESTIONMARK}>Question Settings</BtnWIconSm>

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

