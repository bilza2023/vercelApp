<script>
// @ts-nocheck
// import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from '$lib/util';
import { BASE_URL } from '$lib/cmn/config.js';
import {pageStateStore} from "./store";
import {toast} from '$lib/util';
///////////////////////////////////////////////////
import Display from './Display.svelte';
import ShowMcq from "./ShowMcq.svelte";
import arrangeContent from './fn/arrangeContent';

$: pageState = $pageStateStore;
// $: arranged = arrangeContent(quiz)
let quiz;
let students;

//steps : loading , loaded,
onMount(async () => {
  try {
  // debugger;
    let  quizId = new URLSearchParams(location.search).get("quizId"); 
      const resp = await fetch( `${BASE_URL}/show/${quizId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        //--This is the first call and happnes only when resp.ok
        const data = await resp.json();
        quiz = data.quiz;
        students = data.students;
        // nextPageState();//loginForm or ShowQuiz
    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    toast.push('Unknown Error');
    // console.error(error);
  }
}); 

</script>

<div class="wrapper w-full p-2 bg-gray-800 min-h-screen text-white ">

{#if quiz}
     
  {#each quiz.questions as question}
      <h1>{question.questionType}</h1>

      {#each arrangeContent(question.content) as contentItem}
      <Display  {contentItem} />  
      {console.log(contentItem)}
      {/each}

   <br>
   <ShowMcq {question}  />
   <br/>
   <br/>
{/each}
{/if}
</div>

