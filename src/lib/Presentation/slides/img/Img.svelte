<script>
//@ts-nocheck
export let pulse;
export let tcode;
export let items = [];
export let slideExtra = [];
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor
</script>

<div class="flex flex-col justify-start min-h-screen w-full"
     style={`
 background-color: ${theme.backgroundColor};
 `}
>

  <div class="flex justify-center w-full  pb-4">
    <img style="max-height: 85vh;  width: 100%;" src={`./${tcode}/images/${items[0].content}.png`} alt="">
  </div>

  <div class="flex justify-end w-full pr-10">
    <div style={`color: ${theme.highlightColor}`}>taleem.help</div>
  </div>

<br>
<br>
<br>
</div>
