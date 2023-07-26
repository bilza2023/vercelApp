<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,InputForm,Loading} from '$lib/cmp';

import Questions from './questions/Questions.svelte'
import SettingsMain from '../editTest/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte';
import {onMount,toast,get} from '$lib/util';
import { Agent } from '$lib/ajax';
import makeTestFn from './fn/makeTestFn';
import AddQuestionBar from './AddQuestionBar.svelte';
import cloneFn from './fn/cloneFn';
import deleteFn from './fn/deleteFn';
import HiddenDivs from './HiddenDivs.svelte';
import PublishErrors from './PublishErrors.svelte';

import {showTestStore,showCloneStore,showDeleteStore,errorsArrayStore} from './store';

$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore;
$: errorsArray = $errorsArrayStore;

let item = {};

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

async function clone (newTitle ){
  await cloneFn(newTitle,item);
}////function

async function deleteItem (title){
  if (title !== item.title){
  toast.push('Title does not match');
  return;
  }
  // it has _id since its template not a question which may or may not have _id
  await deleteFn(item._id);
 
}//del fn

async function makeTest (newTitle ){
  await makeTestFn(newTitle,item);
}

</script>
<!-- ****************************************** -->
<!-- ****************************************** -->
<!-- ****************************************** -->
<PageWrapper>
{#if  item}
<!-- ************** -->
<Toolbar {item}/>

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>Edit Template</HdgWithIcon>
        </Centre>

        <PublishErrors />
        <!-- ********** The Hidden Dialogue box **************** -->
            <HiddenDivs
              {showTest} {showClone} {showDelete} {makeTest} {clone} {deleteItem} 
            />

        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
          <br/>
          <SettingsMain {item} />
        </div>
        
        <!-- ********** THE Questions   *********** -->
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