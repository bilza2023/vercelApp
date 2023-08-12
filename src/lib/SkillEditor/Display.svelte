<script>
//@ts-nocheck
export let contentItem;
import {ListDisplay,DivDisplay,TableDisplay,PreDisplay,YoutubeDisplay,ImageDisplay} from './index';
</script>

{#if contentItem.type === 'div'}
<DivDisplay {contentItem} />
{/if}

{#if contentItem.type === 'list'}
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
{/if}


