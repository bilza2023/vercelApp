<script>
  //@ts-nocheck
import {onMount} from '$lib/util';

import totalMksByStudInTest from '$lib/appComp/checking/totalMksByStudInTest';
import getTestTotalMarks from '$lib/appComp/checking/getTestTotalMarks';

export let test;
let testTotalMarks;
onMount(()=>{
   testTotalMarks = getTestTotalMarks(test);
   console.log('testTotalMarks' ,  testTotalMarks)
});


</script>

<div class='flex justify-center '>
    <table class='w-full border-separate'>
      <tr class='border-separate'>
        <!-- Apply the custom-td class to all td elements -->
        <td class='custom-td'>Student Id</td>
        <td class='custom-td'>Student Name</td>
        <td class='custom-td'>Marks</td>
        <td class='custom-td'>Percentage</td>
      </tr>
{#each test.results as result }
  
      <tr class='border-separate'>
        <!-- Apply the custom-td class to all td elements -->
        <td class='custom-td'>{result.studentId}</td>
        <td class='custom-td'>{result.studentName}</td>
        <td class='custom-td'>{totalMksByStudInTest(result)}</td>
        <td class='custom-td'>{(totalMksByStudInTest(result)/testTotalMarks)*100} %</td>
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
