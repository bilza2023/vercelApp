<script>
// @ts-nocheck

import { v4 as uuid } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';
import transformQ2R from "../fn/transformQ2R";

export let questions;
export let next;
export let prev;
export let quiz;


 export let cq;
 export let saveResponse;

import {pageStateStore, studentIdStore } from '../store.js';
$: studentId = $studentIdStore;

import {Agent} from "$lib/ajax";

let hideSaveBtn = false;

async function saveResults  (){
  try{
  // console.log('Save results');
    debugger;
  //  setWaiting();
    hideSaveBtn = true;  
    let quizResult = {};
    quizResult.answers = await transformQ2R(quiz);
    quizResult.userId = quiz.userId;
    
    quizResult.id = uuid(); 
    // quizResult.quizId = quiz._id; 
    quizResult.runId = quiz._id; 
    quizResult.runTitle = quiz.title; 
    quizResult.testId = quiz.testId; //importantay 
    quizResult.studentId = studentId; //here
    
    console.log("quizResult after check before save" ,quizResult);
    // const resp = await ajaxPost(`${BASE_URL}/result/save`,{ quizResult, quiz } ); 
    const resp = await Agent.create('result', {item :quizResult});
      if (resp.ok){
          // console.log("resp",resp)
            pageStateStore.set('goodbye');
          // console.log("outro",$pageStateStore)
          toast.push("results saved");
      }else {
        const data = await resp.json();
          hideSaveBtn = false;
          toast.push(data.errormsg);
          pageStateStore.set('goodbye');
   }
  // pageStateStore.set('goodbye');
  }catch (e) {
  
  }
}
</script>



<div class="flex   justify-between w-full   gap-2  mt-2 mb-2 items-center">
  <div class="elm">
  <button class="" on:click={prev}>
  <span class="text-2xl p-2">&#8592;</span>
  </button>
  </div>

  <div class="elm">
    <!--submit btn-->
    {#if (cq == questions.length-1)} 
      {#if (hideSaveBtn == false)}
        <button 
          class=""
          on:click={ saveResults  }   > 
          {#if saveResponse == true}
          <span class="text-2xl">💾 Submit & Save</span>
          {:else}
            <span class="text-2xl">📋Submit</span>
          {/if}
        </button>
      {/if}
    {/if}
  </div>

  <div class="elm">
  <button class="" on:click={next}>
   <span class="text-2xl p-2">&#8594;</span>
  </button>
  </div>
</div>


<style>
.elm {
  background-color:blue;
  color:white;
  padding:1px;
  margin:1px;
  border-radius: 10px;

  }

</style>