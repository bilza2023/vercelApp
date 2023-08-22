<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading,SectionHeadIcon} from '$lib/cmp';
import {onMount,toast,fade} from '$lib/util';

import Questions from './questions/Questions.svelte'
import SettingMain from './settings/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte';
import AddQuestionBar from './AddQuestionBar.svelte';
import HiddenDivs from './HiddenDivs.svelte';
import PublishErrors from './PublishErrors.svelte';
import PageSeparator from './PageSeparator.svelte';
import QuizObj from "../../lib/quizLib/quiz";
import {Display} from '$lib/ContentEditor';


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

//===I will have to remove it later and replace it with redraw but it is interesting that I have sued the game loop technique
setInterval(function(){ quiz = quiz;},200);


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
<SectionHeadIcon title={'TT'} >
          
<!-- ****************************************** -->
<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
  class="border-2 border-gray-500 p-1 m-2 mt-0" >

<!-- ****************************************** -->
<div class="flex justify-center"><button class="bg-gray-900 p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200">📋&nbsp;
Content Editor</button></div>
           
<Display content={question.content.sortContent()} contentObj={question.content}  {redraw}/>

<div class="flex justify-center"><button class="bg-gray-900 p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200">📋&nbsp;
Question Settings</button></div>




</div>





</SectionHeadIcon>
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
