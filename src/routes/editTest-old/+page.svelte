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
import quizStringifiedQsToArray from '../show/fn/quizStringifiedQsToArray';

import {itemStore,questionsStore,showQuestionsStore} from './store';
// import QuizObj from './quizObj/QuizObj';


// $:item = $itemStore; 

// $: showQuestions = $showQuestionsStore;
let quiz;
//-14-aug-2023 other than error handling everything is ok
onMount(async ()=>{
  try {
    // debugger;
    const quiz = new QuizObj(138);
// quiz.questions.push(getMCQ());
    quiz.questions.addMCQ();
    quiz.questions.addDiv(0);

    // quizObj.set(incomming); //important
      // quizObj.questions.set(incomming.questions);//important
      // debugger;
    // quizObj = new QuizObj();  
    // const quizId = new URLSearchParams(location.search).get("quizId");
    // const resp = await Agent.readone('test' , {id: quizId });
    // if (resp.ok){
      
    //   const data = await resp.json();
    //   let incomming = data.item;
    //   //--This is not required
    //   // incomming = await quizStringifiedQsToArray(incomming);
      
    //   quizObj.set(incomming); //important
    //   quizObj.questions.set(incomming.questions);//important

    // }else {
    //     toast.push('failed to load');
    // }
  } catch (e) {
       toast.push('failed to load');
    // console.error(e);
  }   
});


import MainNav from '$lib/appComp/MainNav.svelte';
</script>
<!-- ****************************************** -->
<MainNav/>
<PageWrapper>
{#if  quiz}
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
