<script>
//@ts-nocheck
export let content;
export let redraw;
// export let moveDown;
// export let moveUp;
// export let deleteDiv;

import {DivEditor} from './index';
// import {ListEditor,DivEditor , TableEditor ,PreEditor , YoutubeEditor ,ImageEditor} from './index';


</script>

{#each content as contentItem}
{#if contentItem.type == 'div'}
<DivEditor  {contentItem} {redraw}/>
{/if}
<!-- 
{#if contentItem.type == 'list'}
<ListEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'table'}
<TableEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'pre'}
<PreEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'youtube'}
<YoutubeEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'image'}
<ImageEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if} -->

{/each}