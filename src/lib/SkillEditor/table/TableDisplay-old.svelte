<script>
//@ts-nocheck
  export let col = 3; 
  export let contentItem = []; 
  contentItem[0] = ["Plastic", "Bird", "Cat"];
  contentItem[1] = ["Kite", "Baloon", "Kitten"];
  contentItem[2] = ["Apple", "Bus", "Hen"];


</script>

{#if contentItem}
<div>
  <table>
    <thead>
      <tr>
        {#each contentItem[0] as header}
        <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each contentItem.slice(1) as row}
      <tr>
        {#each row as cell}
        <td>{cell}</td>
        {/each}
      </tr>
      {/each}
    </tbody>
  </table>
</div>
{/if}
