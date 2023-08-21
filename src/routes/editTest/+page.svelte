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
import Display from '$lib/SkillEditor/Display.svelte';
import ToolbarContent from './ToolbarContent.svelte';
import quizStringifiedQsToArray from '../show/fn/quizStringifiedQsToArray';

import {itemStore,questionsStore,showQuestionsStore} from './store';
// $:item = $itemStore; 
// $: showQuestions = $showQuestionsStore;
let quiz;
//-14-aug-2023 other than error handling everything is ok
let formatted;
onMount(async ()=>{
  try {
  // debugger;
    quiz = new QuizObj(138);
    quiz.questions.addMCQ();
    quiz.questions.addDiv(0 , 'Ghair Kanooni');
    quiz.questions.addDiv(0 , 'This is great');
    quiz.questions.addDiv(0 , 'Pakistani Newspaper');
    //----
    // debugger;
    console.log('quiz.questions.getDivs()',quiz.questions.getDivs(0));

 } catch (e) {
       toast.push('failed to load');
    // console.error(e);
  }   
});



function add(index=0,arrayName){
  // debugger;
  quiz.questions.addDiv( index , 'Ghair Kanooni');
  quiz  = quiz; /// later find some good solution for this but for now it works
  console.log('quiz.questions.getDivs()',quiz.questions.getDivs(0));
}


import MainNav from '$lib/appComp/MainNav.svelte';
</script>
<!-- ****************************************** -->
<MainNav/>
<PageWrapper>
{#if quiz}
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
{#each quiz.questions.questionsArray  as question}

<button on:click={()=>add(0 ,'divs', 'He is illegal')}>add</button>            
<!-- <ToolbarContent  questions={formatted} />             -->
  <Display content={question.content.getContent()} />

{/each}
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
