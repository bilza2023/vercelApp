<script> 
//@ts-nocheck
import ToolbarContent from '../../routes/editTest/ToolbarContent.svelte';
export let content;
export let redraw;
export let contentObj;


// import {ListDisplay,DivDisplay,TableDisplay,PreDisplay,YoutubeDisplay,ImageDisplay} from './index';
import {DivDisplay,DivEditor} from './index';

let showEditor = false;
function toggleShowEditor(){showEditor = !showEditor;}


</script>
<!-- <button on:click={(e)=>contentObj.addDiv('ffff')}>Add</button> -->
<ToolbarContent  {redraw} {toggleShowEditor} {contentObj}/>
{#each content as contentItem }

        {#if contentItem.type === 'div'}
        <DivDisplay {contentItem} />

          {#if  showEditor}
           <DivEditor {contentItem}  {redraw} {contentObj}/>
          {/if}
        {/if}
        
        <!-- {#if contentItem.type === 'list'}
        <ListDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'table'}
        <TableDisplay  {contentItem} />
        {/if}

        {#if contentItem.type === 'pre'}
        <PreDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'youtube'}
        <YoutubeDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'image'}
        <ImageDisplay {contentItem} />
        {/if} -->

{/each}
