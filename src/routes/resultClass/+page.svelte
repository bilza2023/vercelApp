<script>
//@ts-nocheck 
import {Agent , Icons, onMount,toast} from '$lib/util';
import {PageWrapper,Centre,HdgWithIcon,SectionHead,Loading} from '$lib/cmp';
// import Details from './Details.svelte';
import getClass from './fn/getClass';
import getStudents from './fn/getStudents';
import getTests from './fn/getTests';
import getResults from './fn/getResults';
import TestResults from './TestResults.svelte';

import check4MarksObtained from '$lib/appComp/checking/check4MarksObtained';

let loaded = false;
let tests;
let classObj;
let students;

////////////////////////////////////
onMount(async () => {
  try {
  // debugger;
  loaded = false;
  const  id = new URLSearchParams(location.search).get("quizId");

  classObj = await getClass(id);
  students = await getStudents(id);
  tests =    await getTests(id);
             await getResults(tests); //GET REZ FOR ALL TESTS
  //*********************************************/             
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    await check4MarksObtained(test , test.results);
  }
  //*********************************************/             

  //*********************************************/             
  console.log('tests with results' , tests);
  loaded = true;
  } catch (error) {
    toast.push("page load error");
 }
});

</script>

<!-- <Nav /> -->
<PageWrapper>
{#if loaded}
<br/>
  <Centre>
    <HdgWithIcon icon={Icons.TEAM }>{classObj.name} (Result)</HdgWithIcon>
  </Centre>
<br/>
<br/>
        
{#each tests as test}
  <div class='flex justify-center'>
  <div class='w-10/12'>
   
    <SectionHead title={test.title} >
    <div class='bg-gray-700 p-2 m-2 border-1 border-white'>

      <TestResults  {test} />
    
    </div>
    </SectionHead>

  </div>
  </div>
  <br/>
{/each}

{:else}
<Loading/>
{/if}

<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>