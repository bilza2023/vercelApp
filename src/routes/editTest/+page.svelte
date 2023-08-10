<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading} from '$lib/cmp';

import {onMount,toast,get,Agent} from '$lib/util';

import Questions from './questions/Questions.svelte'
import SettingMain from './settings/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte';
import AddQuestionBar from './AddQuestionBar.svelte';

import cloneFn from './fn/cloneFn'; //??

import HiddenDivs from './HiddenDivs.svelte';
import PublishErrors from './PublishErrors.svelte';
import PageSeparator from './PageSeparator.svelte';

import RunDiv from './RunDiv.svelte';
import stringToArray from './fn/stringToArray';


import {showTestStore,showCloneStore,showDeleteStore,errorsArrayStore,showQuestionsStore,showRunDlgStore,questionsStore,itemStore} from './store';

$:item = $itemStore;

$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore;
$: errorsArray = $errorsArrayStore;
$: showQuestions = $showQuestionsStore;
$: showRunDlg = $showRunDlgStore; //it is in store since RunDlg will use it


onMount(async ()=>{
  try {
      // debugger;
    const quizId = new URLSearchParams(location.search).get("quizId");
    const resp = await Agent.readone('test' , {id: quizId });
    if (resp.ok){
      
      const data = await resp.json();
      const item = (data.item);
      for (let i = 0; i < item.questions.length; i++) {
        item.questions[i].content = await stringToArray(item.questions[i].content);
      }
      itemStore.set(item); //important
      questionsStore.set(item.questions);//important

    }else {
    toast.push('failed to load');
    }
  } catch (e) {
    toast.push('failed to load');
    // console.error(e);
  }   
});


async function clone (newTitle ){ //??
  await cloneFn(newTitle,item);
}////function



</script>
<!-- ****************************************** -->
<PageWrapper>
{#if  item}
<!-- ************** -->
<Toolbar {item} />

{#if showRunDlg}
<RunDiv  {item} />
{/if}
        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>Edit Test</HdgWithIcon>
        </Centre>

        <PageSeparator />

        <PublishErrors />
        <!-- ********** The Hidden Dialogue box **************** -->
            <HiddenDivs
              {showTest} {showClone} {showDelete} {clone} {item} />

        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
          <br/>          
            {#if  showQuestions}
            <Questions />
             <br/>
            <AddQuestionBar />
            <br/>
            {:else}
            <SettingMain {item}/>
            {/if}
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
