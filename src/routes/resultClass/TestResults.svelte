<script>
  //@ts-nocheck
  export let results;
</script>

<div class='flex justify-center '>
    <table class='w-full border-separate'>
      <tr class='border-separate'>
        <!-- Apply the custom-td class to all td elements -->
        <td class='custom-td'>Student Id</td>
        <td class='custom-td'>Student Name</td>
        <td class='custom-td'>Percentage</td>
      </tr>
{#each results as result }
  
      <tr class='border-separate'>
        <!-- Apply the custom-td class to all td elements -->
        <td class='custom-td'>{result.studentId}</td>
        <td class='custom-td'>{result.studentName}</td>
        <td class='custom-td'>{(Math.random() * 100).toFixed(2)} %</td>
      </tr>
{/each}
    </table>
  </div>

<style>
  /* Define a new CSS class with Tailwind CSS classes */
  .custom-td {
    /* Use Tailwind CSS utility classes here */
    @apply p-1 m-1 border-2 border-gray-600 text-center;
    /* Add more Tailwind CSS classes as needed */
    /* For example: */
    /* @apply bg-gray-100 text-gray-900; */
  }
</style>
