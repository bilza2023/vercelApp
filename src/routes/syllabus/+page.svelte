<script>  
//@ts-nocheck
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto } from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import Dd from "./Dd.svelte";
import ExerciseQs from "./ExerciseQs.svelte";
import ChapterLinks from "./ChapterLinks.svelte";
import Exercises from "./Exercises.svelte";
import getSyllabus from '$lib/data/getSyllabus.js';

/////////////////////////////////
let questions;
let tcode;
let selectedEx ="1.1";
let selectedChapter = 1;
let chapterLinks = [];
let chapterTotalQuestions = 0;

$:  {
  if (questions){
    chapterTotalQuestions = questions.filter(question => question.chapter == selectedChapter).length;
  }
}
function setEx(ex){
  selectedEx = ex;
}

async function setChapter(newChapter){
try{
// debugger;
selectedChapter = newChapter;
const modulePath = `/${tcode}/chapterLinks_${selectedChapter}.js`;
    const { links } = await import(modulePath);
if(links && links.length > 0){
chapterLinks = links}
}catch(e){
    // console.log(links)
 chapterLinks = [];   
 return true;
}
}


onMount(async () => {
try{

tcode = new URLSearchParams(location.search).get("tcode");
questions = await getSyllabus(tcode);  
await setChapter(1); //so that links are loaded

  } catch (e) {
       toast.push('System error');
  }      
});
////////////////////////////////////////////////////////
</script>

<MainNav />
<PageWrapper>

<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
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

<ExerciseQs {questions} {selectedEx} {tcode}/>
<br/>
{/if}
<br>
<ChapterLinks {chapterLinks}/>
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
