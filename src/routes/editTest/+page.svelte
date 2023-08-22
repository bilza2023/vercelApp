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
import {Display,Editor} from '$lib/ContentEditor';
import ToolbarContent from './ToolbarContent.svelte';

let quiz;;

onMount(async ()=>{
  try {
  // debugger;
    quiz = new QuizObj(138);
    quiz.addMCQ();
    quiz.questions[0].content.addDiv('Ghair Kanooni');
 } catch (e) {
       toast.push('failed to load');
    // console.error(e);
  }   
});


function printQuiz(){console.log('quiz' , quiz);}
function redraw(){quiz = quiz;}

import MainNav from '$lib/appComp/MainNav.svelte';
/////////////////////////////////////////////////////////////////
</script>
<!-- ****************************************** -->
<MainNav/>
<PageWrapper>
{#if quiz}
<button on:click={printQuiz}>Print Quiz</button>
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
{#if quiz.questions.length > 0}

    
  {#each quiz.questions  as question}
    <ToolbarContent  {question} {redraw}/>
    <Display content={question.content.sortContent()} />
    <Editor content={question.content.sortContent()}  {redraw}/>
  {/each}
{/if}

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
