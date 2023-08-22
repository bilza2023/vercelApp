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
let quiz;;

onMount(async ()=>{
  try {
  // debugger;
    quiz = new QuizObj(138);
    quiz.addMCQ();
    quiz.questions[0].content.addDiv('Ghair Kanooni');
    // quiz.questions.addDiv(0 , 'This is great');
    //----
    itemStore.set(quiz);
    // debugger;
    // console.log('quiz.questions.getDivs()',quiz.questions.getDivs(0));

 } catch (e) {
       toast.push('failed to load');
    // console.error(e);
  }   
});

$:item = $itemStore; 

function redraw(){quiz = quiz;}

function add(question){
 question.content.addDiv('Ghair Kanooni')
 console.log(question);
 quiz = quiz;
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

{#each quiz.questions  as question}

<button on:click={()=>add(question)}>add</button>            

<ToolbarContent  {question} {redraw}/>

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
