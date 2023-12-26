<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;
export let selectedEx;

    let showQs=true;
    let sortedArray;

$:{
 if(questions){
    const sortOne = questions.filter(question =>question.partNo.exercise == selectedEx);
    sortedArray = sortOne.sort((a, b) => {
        const questionNoA = a.partNo.questionNo;
        const questionNoB = b.partNo.questionNo;
    return questionNoA - questionNoB;
    });
    console.log(sortedArray);
 }
}


$: totalExQuestion = questions.filter(question => question.partNo.exercise === selectedEx).length

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
        {#if question.questionType == 'paid' }
            <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.RECYCLE}
            url = {`/player?tcode=fbise9math&id=${question._id}`}
            >
                      
            </Card>
         {:else if question.questionType == 'login' }
        <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.LOCK }
            url = {`/player?tcode=fbise9math&id=${question._id}`}
            >
                      
            </Card>    
        {:else if question.questionType == 'free'}
        <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.ROCKET }
            url = {`/player?tcode=fbise9math&id=${question._id}`}
            >
                      
            </Card>
        {/if}
            </div>
{/each}
    </div>
{/if}    
</div>    