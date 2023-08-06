<script>
//@ts-nocheck 
import {Agent , Icons, onMount,toast} from '$lib/util';
import {PageWrapper,Centre,HdgWithIcon,SectionHead} from '$lib/cmp';
// import Details from './Details.svelte';
import getClass from './fn/getClass';
import getStudents from './fn/getStudents';
import getTests from './fn/getTests';

let results;
let tests;
let classObj;
let students;

////////////////////////////////////
onMount(async () => {
  try {
  // debugger;
  const  id = new URLSearchParams(location.search).get("quizId");

  classObj = await getClass(id);
  students = await getStudents(id);
  tests = await getTests(id);
  // console.log(id);
  
  } catch (error) {
    toast.push("page load error");
 }
});

</script>

<!-- <Nav /> -->
<PageWrapper>
{#if classObj}
<br/>
  <Centre>
    <HdgWithIcon icon={Icons.TEAM }>{classObj.name} (Result)</HdgWithIcon>
  </Centre>
<br/>
<br/>
        
<!-- {#each results as result} -->
  <!-- <div class='flex justify-center'>
  <div class='w-10/12'>
    <SectionHead title={result.runTitle} >
    <div class='bg-gray-700 p-2 m-2 border-1 border-white'>
      
      <Details  {result}/>
    </div>
    </SectionHead>
  < /div>
  </div> -->
<!-- {/each} -->

{/if}

<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>