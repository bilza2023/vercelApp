<script>
//@ts-nocheck
export let contentItem;
import {ListDisplay,DivDisplay,TableDisplay,PreDisplay,YoutubeDisplay,ImageDisplay} from './index';

import { onMount } from "$lib/util";
onMount(async () => {
    // debugger;
    console.log(contentItem)
    // const content = $questionsStore[questionIndex].content;
    // contentObj = new ContentObj(content);
});
</script>

{#if contentItem.type === 'divs'}
<DivDisplay {contentItem} />
{/if}

{#if contentItem.type === 'lists'}
<ListDisplay {contentItem} />
{/if}

{#if contentItem.type === 'tables'}
<TableDisplay  {contentItem} />
{/if}

{#if contentItem.type === 'pres'}
<PreDisplay {contentItem} />
{/if}

{#if contentItem.type === 'youtubes'}
<YoutubeDisplay {contentItem} />
{/if}

{#if contentItem.type === 'images'}
<ImageDisplay {contentItem} />
{/if}


