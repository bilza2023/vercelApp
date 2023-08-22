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

//xxxxxxxxxxxxxxxxxxx=======>>
function moveUp(contentId) {
  const sortOrder = contentObj.sortOrder;
    let index = sortOrder.indexOf(contentId);
    if (index > 0) {
        // Swap the contentId with the previous element
        [sortOrder[index], sortOrder[index - 1]] = [sortOrder[index - 1], sortOrder[index]];
    }
    return sortOrder;
}
//xxxxxxxxxxxxxxxxxxx=======>>
function deleteItem(contentId) {
  const sortOrder = contentObj.sortOrder;
  let index = sortOrder.indexOf(contentId);
  if (index !== -1) {
      sortOrder.splice(index, 1);
       deleteById(contentId, sortOrder)
  }
  return sortOrder;
}

function deleteById(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            // Remove the object from the array
            array.splice(i, 1);
            break;
        }
    }
    return array;
}
//xxxxxxxxxxxxxxxxxxx=======>>
function moveDown(contentId) {
    const sortOrder = contentObj.sortOrder;
    let index = sortOrder.indexOf(contentId);
    if (index < sortOrder.length - 1) {
        // Swap the contentId with the next element
        [sortOrder[index], sortOrder[index + 1]] = [sortOrder[index + 1], sortOrder[index]];
    }
    return sortOrder;
}


</script>
<!-- <button on:click={(e)=>contentObj.addDiv('ffff')}>Add</button> -->
<ToolbarContent  {redraw} {toggleShowEditor} {contentObj}/>
{#each content as contentItem }
<!-- {console.log('contentObj' , contentObj) } -->

        {#if contentItem.type === 'div'}
        <DivDisplay {contentItem} />

          {#if  showEditor}
           <DivEditor {contentItem}  {redraw} {contentObj} {moveUp} {moveDown} {deleteItem}/>
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
