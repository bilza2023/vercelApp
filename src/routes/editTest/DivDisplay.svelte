<script>
//@ts-nocheck
export let content
import { onMount } from "$lib/util";
onMount(async () => {
    // debugger;
    // console.log( "frm content" , content)
    // const content = $questionsStore[questionIndex].content;
    // contentObj = new ContentObj(content);
});
</script>
{#if content}
<!-- {#each items as content} -->
<div
  style:padding="{content.paddingY}px {content.paddingX}px"
  style:margin="{content.marginY}px {content.marginX}px"
  style:opacity="{content.opacity}"
  style:border="{content.borderWidth}px {content.borderStyle} {content.borderColor}"
  style:border-radius="{content.borderRadius}px"
  style:background-color="{content.bgColor}"
  style:color="{content.fontColor}"
  style:font-style="{content.fontStyle}"
  style:font-size="{content.fontSize}px"
  style:font-weight="{content.fontWeight}"
  style:text-align="{content.textAlign}"
>
{content.payload}
</div>

{/if}

