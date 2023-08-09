<script>
//@ts-nocheck
// export let data;
// export let data;
export let item


</script>
{#if item}
<!-- {#each items as item} -->
<div
  style:padding="{item.paddingY}px {item.paddingX}px"
  style:margin="{item.marginY}px {item.marginX}px"
  style:opacity="{item.opacity}"
  style:border="{item.borderWidth}px {item.borderStyle} {item.borderColor}"
  style:border-radius="{item.borderRadius}px"
  style:background-color="{item.bgColor}"
  style:color="{item.fontColor}"
  style:font-style="{item.fontStyle}"
  style:font-size="{item.fontSize}px"
  style:font-weight="{item.fontWeight}"
  style:text-align="{item.textAlign}"
>
{item.content}
</div>

<!-- {/each} -->
{/if}

