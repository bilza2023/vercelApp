<script>
//@ts-nocheck
export let contentItem;
import {ListDisplay,DivDisplay,TableDisplay,PreDisplay} from './index';
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


