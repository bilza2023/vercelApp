<script>
// @ts-nocheck
import {fade} from '$lib/util';
import {FormRow,Tf,InputElm,InputTextArea} from '$lib/cmp';
// import SkillEditor from '../../../lib/skillEditor/SkillEditor.svelte';
import {SectionHeadIcon} from '$lib/cmp';
import Options from './Options.svelte';

export let questions;
export let deleteQuestion;

// function updateContent(index, content){
// questions[index].content = content;
// console.log("content" ,  questions[index].content);
// }
</script>

        {#if  questions }  
        {#each questions as question, index }  
        <SectionHeadIcon title={question.content}  ser={index+1} 
        deleteFn ={()=>deleteQuestion(question.id)}
         >
          
          <!-- ****************************************** -->
          <!-- ****************************************** -->
          <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >

          <!-- <SkillEditor  {index} {updateContent} />   -->
          <FormRow title="Question">
          <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={question.content} />
          </FormRow>
          
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

