<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,InputForm,Loading} from '$lib/cmp';

import Questions from './questions/Questions.svelte'
import SettingsMain from '../editTest/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte'
import {onMount,toast,get} from '$lib/util';
import { Agent } from '$lib/ajax';

import {showTestStore,showCloneStore,showDeleteStore} from './store';
import AddQuestionBar from './AddQuestionBar.svelte';

$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore;

let item;
function addQuestion(q){
  const questions = [... item.questions, q];
  item.questions = questions; 
}
function deleteQuestion(id) {
  // Use the filter method to create a new array excluding the question with the matching id
  const updatedQuestions = item.questions.filter(question => question.id !== id);
  item.questions = updatedQuestions;
}
onMount(async ()=>{
  try {
    const quizId = new URLSearchParams(location.search).get("quizId");
    const resp = await Agent.readone('template' , {id: quizId });
    if (resp.ok){
      
      const data = await resp.json();
      item = (data.item);

    }else {
    toast.push('failed to load');
    }
  } catch (e) {
    console.error(e);
  }   
});

</script>

<!-- ************** -->
<PageWrapper>
{#if  item}
<!-- ************** -->
<Toolbar {item}/>

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>Edit Tempalte</HdgWithIcon>
        </Centre>

        <!-- ********** The dialogue box **************** -->
          {#if showTest }
            <InputForm clk={() => showTestStore.set(false)  } title='Create New Test' btnTitle='Create'/>
          {/if}

          {#if showClone }
            <InputForm clk={() => showCloneStore.set(false)  } title='Clone Template' btnTitle='Clone' btnColor='bg-orange-800'/>
          {/if}
          
          {#if showDelete }
            <InputForm clk={() => showDeleteStore.set(false)  } title='Delete Template' btnTitle='Delete'/>
          {/if}

        <!-- ********** The Dialogue Box Ends *********** -->
             <!-- ********** Main Settings  *********** -->

        <div class='px-8'>
        <br/>
          <SettingsMain {item} />
        </div>
        <!-- THE MAIN CODE ENDS -->
        <!-- THE Question -->
        <br/>
        
        <div class='px-8'>
        <Questions questions={item.questions} {deleteQuestion}/>
        </div>
<br/>
<AddQuestionBar  {addQuestion}/>
<br/>

{:else}
<Loading />
{/if}
</PageWrapper>


<!-- Reactivity Technique -->
<!-- 
 1- just use a local variable "item" for all data, no store
 2- have 2 functions in the +page 1:updateItem and 2: updateQuestions so all reactivty happen at home page
 -->