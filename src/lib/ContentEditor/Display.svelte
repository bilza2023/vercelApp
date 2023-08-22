<script> 
//@ts-nocheck
import ToolbarContent from '../../routes/editTest/ToolbarContent.svelte';
export let content;
export let redraw;
// import {ListDisplay,DivDisplay,TableDisplay,PreDisplay,YoutubeDisplay,ImageDisplay} from './index';
import {DivDisplay,DivEditor} from './index';

let showEditor = false;
function toggleShowEditor(){showEditor = !showEditor;}

</script>

{#each content as contentItem }

        {#if contentItem.type === 'div'}
        <ToolbarContent  {redraw} {toggleShowEditor}/>
        <DivDisplay {contentItem} />
        {/if}

          {#if contentItem.type === 'div' && showEditor}
           <DivEditor {contentItem}  {redraw}/>
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
