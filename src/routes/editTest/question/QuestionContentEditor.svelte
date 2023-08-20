<script>
//@ts-nocheck
// -8/Aug-2023 QuestionContentEditor : This is just one of the many possible wiringup of Displays and Editors. We can have many such arragements. This is specifically for creating content for Questions. We can have a different such arrangement for "Web Page Builder" but the base components like DivEditor or DivDisplay remains the same.

import { divData, listData, tableData, preData, youtubeData, imageData, Display, Editor } from '$lib/SkillEditor';
import Toolbar from './Toolbar.svelte';
import { questionsStore } from '../store';
import ContentObj from './contentObj';
import {ListDisplay,DivDisplay} from '../../../lib/SkillEditor';

export let questionIndex;

let contentObj;
let formattedQs=[];
import { onMount } from "$lib/util";
onMount(async () => {
    const content = $questionsStore[questionIndex].content;
    contentObj = new ContentObj(content);
    formattedQs = contentObj.formatQs() 
});


// Reactive statement to update contentObj

//////////////////////////////////////////////

function add(arrayName, data) {
    // debugger;
    questionsStore.update(questions => {
        questions[questionIndex].content[arrayName] = [...questions[questionIndex].content[arrayName], data];
        questions[questionIndex].content.sortOrder = [...questions[questionIndex].content.sortOrder, data.id];
        return questions;
    });
    formattedQs= new ContentObj($questionsStore[questionIndex].content);
    //  contentObj = new ContentObj($questionsStore[questionIndex].content);
}

</script>

<Toolbar {add} />

{#if formattedQs.length > 0}
    {#each formattedQs as contentItem}

        <!-- <Display contentItem={item} /> -->
    <!-- {#if contentItem.type === 'divs'} -->
    <!-- <DivDisplay {contentItem} /> -->
    <!-- {/if} -->

    <!-- {#if contentItem.type === 'lists'} -->
    <ListDisplay {contentItem} />
    <!-- {/if} -->

    {/each}
{/if}
