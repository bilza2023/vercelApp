<script>
//@ts-nocheck
export let results;
</script>

{#each results as result }
<div class='flex  gap-1'>
    <p class='p-1 m-1 bg-gray-600 rounded-md'>Student Id : {result.studentId}</p>
    <p class='p-1 m-1 bg-gray-600 rounded-md'>Student Name : {result.studentName}</p>
    <p class='p-1 m-1 bg-gray-600 rounded-md'>Marks Obtained : 33.44</p>
</div>



{/each}



