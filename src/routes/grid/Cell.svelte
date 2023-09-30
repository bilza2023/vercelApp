<script>
  export let cell;
  export let runningTime;
  export let bgColor;
</script>

<td
  class="m-1 p-1"
  class:border-t-2={cell.bt}
  class:border-l-2={cell.bl}
  class:border-r-2={cell.br}
  class:border-b-2={cell.bb}
>
 <span 
 style = {`color : ${cell.startTime < runningTime ? "red": bgColor }`} >
    {cell.content}
  </span>
</td>

