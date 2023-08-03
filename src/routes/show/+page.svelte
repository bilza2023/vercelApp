<script>
// @ts-nocheck
import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
import { BASE_URL } from '$lib/cmn/config.js';
import {pageStateStore} from "./store";
import {toast} from '$lib/util';
///////////////////////////////////////////////////
import LoginForm from './loginForm/LoginForm.svelte';
import Goodbye from './goodbye/Goodbye.svelte';
import ShowQuiz from './showQuiz/ShowQuiz.svelte';
// import Result from './result/Result.svelte';

$: pageState = $pageStateStore;

///////////////////////////////////////////////////
///////////////////////////////////////////////////
let quiz;
let students;

onMount(async () => {
  try {
    debugger;
    pageStateStore.set('loading');
    let  quizId = new URLSearchParams(location.search).get("quizId"); 
      const resp = await fetch( `${BASE_URL}/show/${quizId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        pageStateStore.set('loaded');
        const data = await resp.json();
        quiz = data.quiz;
        students = data.students;
    } else {
      const data = await resp.json();
      toast.push(data.message);
    }
  
  } catch (error) {
    // console.error(error);
  }
}); 

</script>

<div class="wrapper w-full p-2 bg-gray-800 min-h-screen text-white ">

{#if quiz}
          <!-- //==loaded======-->    
            {#if pageState == 'loaded'}
              <LoginForm {quiz}{students} />
            {/if}
          
          <!-- //==showQuiz======-->    
            {#if pageState == 'showQuiz'}
              <ShowQuiz {quiz} />
              <!-- <h1>ShowQuiz</h1> -->
            {/if}

            <!-- //==result======-->  
            {#if pageState == 'result'}
              <!-- <Result {quiz} /> -->
            {/if}

            <!-- //=goodbye======-->
            {#if pageState == 'goodbye'}
              <Goodbye  {quiz}/>
            {/if}

{:else}
<Loading />
{/if}
</div>

