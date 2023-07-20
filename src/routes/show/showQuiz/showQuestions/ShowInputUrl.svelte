<script>
export let questions;
export let cq;
</script>


<div class="flex flex-col  justify-center   w-full">

    <div class="flex justify-center   w-full">
        <input 
         class="w-10/12 bg-gray-600 text-white border-2 border-stone-300 rounded-md " type="url" bind:value={questions[cq].payload}>

    </div> 

  
    <div class="flex justify-center   w-full mt-4">
    &#x1F310; Url
    </div>  

</div>   