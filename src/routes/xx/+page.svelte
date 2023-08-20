<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading} from '$lib/cmp';
import {onMount,toast,Agent} from '$lib/util';

import QuizObj from "../../lib/quizLib/quiz";

let quiz;

onMount(async ()=>{
  try {
    // debugger;
    const quiz = new QuizObj(138);
    quiz.questions.addMCQ();
    quiz.questions.addDiv(0);
    
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

        
{/if}

<br>
<br>
<br>
<br>
<br>
<br>
</PageWrapper>
