
<script>
//@ts-nocheck
export let icon="📜";
export let title='The Title';
export let clk = ()=>true;
export let titleCharsCount = 20;
//------------------
function firstXChars(string) {
  return string.slice(0, titleCharsCount);
}

</script>

 
<div class="w-full bg-gray-600 rounded-md p-2 m-1 
border-4  border-blue-700 text-center 
hover:border-blue-200"><!--outer -div-->

<button  class="  rounded-lg" 
 on:click={clk} >

<div class="flex flex-col" ><!--inner -div-->
    <!-- //icon -->
    <div class="mb-2"><span class="text-4xl">{firstXChars(icon)}</span></div>
   <!-- title -->
   <div class="p-1 m-1 bg-gray-700 text-sm rounded-md">{title}</div>
   <!-- buttons -->
   
   <div class='flex justify-center m-0 p-0'>
   <slot ></slot>
      <hr/>
   </div>
   
</div><!--inner-div-->
</button>
</div><!--outer-div-->
