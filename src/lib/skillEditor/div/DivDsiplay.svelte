<script>
// import DivControls from "./DivControls.svelte";
  export let content = 'content...';  

  export let item = {
    paddingX: 20,
    paddingY: 20,
    bgColor: 'green',
    opacity: 1,
    borderColor: 'blue',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontColor: 'white',
    borderWidth: 5,
    fontSize: 16,
    borderRadius: 10,
    marginX: 10,
    marginY: 10,
    borderStyle: 'solid',
    textAlign: 'left'
  };
</script>

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
{content}
</div>

