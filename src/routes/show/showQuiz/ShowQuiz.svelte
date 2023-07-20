<script>
// @ts-nocheck

// import {pageState} from "./showQuizStore";
import Btns from "./Btns.svelte";
import ShowQuestions from "./showQuestions/ShowQuestions.svelte";
import ProgressBar from "$lib/cmp/ProgressBar.svelte";
import Loading from '$lib/cmp/Loading.svelte';
// import ShowMcq from "./showQuestions/ShowMcq.svelte";

//--we need these only if we want to react to them
export let quiz;


let cq = 0;

const next = ()=>{
  if (cq < quiz.questions.length-1){ // This is correct
    cq += 1;
  }else {
  cq = ( quiz.questions.length-1 );
  }
}
const prev = ()=>{
  if (cq > 0){
  cq -=1;
  }else {
    cq= 0;
  }
}

</script>

<br>
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>
  <br>

<div class="flex flex-col justify-center bg-gray-700 p-1 
 text-white rounded-md w-10/12 mx-auto border-2 border-gray-100">

<ProgressBar total={quiz.questions.length} current={cq}/>

  <h1 
    class="bg-red-900 rounded-md p-4 m-3  text-center text-xl">
    {quiz.questions[cq].content}
  </h1>
<br>
      <ShowQuestions  questions={quiz.questions} {cq} />
  
<Btns   questions={quiz.questions} {cq}  {quiz}  saveResponse={quiz.saveResponse} {next} {prev} />
</div><!--flex box ends--->

