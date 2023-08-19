<script>
//@ts-nocheck
import { divData, listData, tableData, preData, youtubeData, imageData, Display, Editor } from '$lib/SkillEditor';

import { questionsStore } from './store';
import ContentObj from './contentObj';

export let questionIndex;

let contentObj;

import { onMount } from "$lib/util";
onMount(async () => {
    const content = $questionsStore[questionIndex].content;
    contentObj = new ContentObj(content);
});


// Reactive statement to update contentObj
$: {
    if ($questionsStore[questionIndex]) {
        contentObj = new ContentObj($questionsStore[questionIndex].content);
    }
}



function addDiv() {
    // debugger;
    const data = divData();
    questionsStore.update(questions => {
        questions[questionIndex].content.divs = [...questions[questionIndex].content.divs, data];
        questions[questionIndex].content.sortOrder = [...questions[questionIndex].content.sortOrder, data.id];
        return questions;
    });
    //  contentObj = new ContentObj($questionsStore[questionIndex].content);
}

</script>

<button on:click={addDiv}>Div</button>

{#if contentObj && contentObj.formatQs().length > 0}
    {#each contentObj.formatQs() as item}
    
        <Display contentItem={item} />
    {/each}
{/if}
