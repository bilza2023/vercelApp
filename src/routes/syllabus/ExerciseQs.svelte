<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let tcode;
export let questions;
export let selectedEx;

    let showQs=true;
    let sortedArray;

$:{
  selectedEx;  
  if(questions){
  let filteredQuestions = questions.filter(question => question.exercise === selectedEx);
  sortedArray =  filteredQuestions.sort((a, b) =>  a.questionNo - b.questionNo );
  }  
//   console.log("sortedArray",sortedArray);
}

$: totalExQuestion = questions.filter(question => question.exercise === selectedEx).length

function slugToName(variableName) {
  return variableName.replace(/_/g, ' ')
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}

function getTitle(question){
if (question.name && question.name !== ''){
return  slugToName(question.name);
}else {
return `Ex ${question.exercise} Q-${question.questionNo} pt ${question.part}`;
}
}

function getIcon(status){
// questionType ['paid', 'login' , 'free'],
  if (status == 'free') {return Icons.RUN  }
  if (status == 'login') {return Icons.PENCIL }
  if (status == 'paid') {return '🔒' }
}
</script>
<!-- ///////////////// -->
<div class="bg-gray-700 p-2 m-2 rounded-md">
    <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showQs = !showQs}
    >
    Total Exercise Questions ({`${totalExQuestion}`})
    </button>
    </div>

{#if showQs}
<div class='flex  w-full justify-center  flex-wrap  '>
{#each sortedArray as question,index}    
            <div class='w-3/12'>
            <Card
            title = {getTitle(question)}
            icon={getIcon(question.questionType)}
            url = {`/player?tcode=${tcode}&id=${question._id}`}
            >
                      
            </Card>
       
            </div>
{/each}
    </div>
{/if}    
</div>    