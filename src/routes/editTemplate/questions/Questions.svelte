<script>
// @ts-nocheck
import {fade} from '$lib/util';
import {FormRow,Tf,InputElm,InputTextArea} from '$lib/cmp';
// @ts-nocheck
import {SectionHeadIcon} from '$lib/cmp';
import Options from './Options.svelte';

export let questions;
</script>

        {#each questions as question }  
        <SectionHeadIcon title={question.content}>
          
          <!-- ****************************************** -->
          <!-- ****************************************** -->
          <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
          class="border-2 border-gray-500 p-1 m-0 mt-0" >


          <FormRow title="Question">
          <InputElm value={question.content} />
          </FormRow>
          
          <FormRow title="Multi Select">
          <Tf obj={question} bool_prop="multiSelect"  />
          </FormRow>

          <FormRow title="Explanation">
          <InputTextArea value={question.explanation} />
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
        {/each}

