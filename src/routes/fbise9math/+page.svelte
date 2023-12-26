<script>  
//@ts-nocheck
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto } from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import Dd from "./Dd.svelte";
import ExerciseQs from "./ExerciseQs.svelte";
import Exercises from "./Exercises.svelte";
import {syllabus} from '$lib/data/syllabus.js';

/////////////////////////////////
let questions;
let selectedEx ="1.1";
let selectedChapter = 1;
let chapterTotalQuestions = 0;

$:  {
  if (questions){
    chapterTotalQuestions = questions.filter(question => question.chapter == selectedChapter).length;
  }
}
function setEx(ex){
  selectedEx = ex;
}

function setChapter(newChapter){
selectedChapter = newChapter;
}
/////////////////-----on-mount
function getUrl(question){
 return `/player?tcode=fbise9math&?id=${question._id}`;
} 

onMount(async () => {
try{
questions = syllabus;  

  } catch (e) {
       toast.push('System error');
  }      
});
////////////////////////////////////////////////////////
</script>

<MainNav />
<PageWrapper>

<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>FBISE 9th Math</HdgWithIcon>
</div>
{#if questions}

<div class="p-4 m-1 border-2 border-white rounded-lg">
<Dd {setChapter} {selectedChapter}/>
  <br/>
<Exercises  {questions} {selectedChapter} {selectedEx} {setEx} />
</div>


<div class='flex justify-start text-xs p-1 m-1 '>
{`Total Chapter Questions: ${chapterTotalQuestions}`}
</div>

<ExerciseQs {questions} {selectedEx} {getUrl}/>
<br/>
{/if}
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</PageWrapper>
