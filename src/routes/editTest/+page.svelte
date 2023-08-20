<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading} from '$lib/cmp';
import {onMount,toast,Agent} from '$lib/util';
import QuizObj from "../../lib/quizLib/quiz";

let quiz=null;
//-14-aug-2023 other than error handling everything is ok
onMount(async ()=>{
  try {
    // debugger;
    const quiz = new QuizObj(138);
// quiz.questions.push(getMCQ());
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
{#if quiz}
 <Centre>
    <HdgWithIcon icon='📜'>{'ok'}</HdgWithIcon>
</Centre>

<br>
<br>
<br>
<br>
<br>
<br>
{/if}
</PageWrapper>