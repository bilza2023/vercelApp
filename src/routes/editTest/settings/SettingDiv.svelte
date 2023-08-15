<script>
// @ts-nocheck
import { SectionHead, FormRow, Tf } from '$lib/cmp';
import {itemStore} from '../store';
import Access from './Access.svelte';

$:item = $itemStore;
export let visible;


</script>



  <SectionHead title={item.title} {visible}>
    <FormRow title="Quiz Title">
      <input
        type="text"
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={item.title}
      />
    </FormRow>

    <FormRow title="Intro Text">
      <textarea
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={item.introText}
      ></textarea>
    </FormRow>

    <FormRow title="Farewell Text">
      <textarea
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={item.farewellText}
      />
    </FormRow>
   
    <FormRow title="Show Questions">
    <div class='flex justify-center  w-full'>
       <select class='bg-gray-700 text-white w-10/12 rounded-md  
       m-1 p-1 min-h-[50px]'
         bind:value={item.displayQOneByOne} >
        <option class='text-center w-full mx-4' value={true} 
        selected={item.displayQOneByOne === true}
        >One By One</option>
        <option class='text-center w-full mx-4' value= {false}
        selected={item.displayQOneByOne === false}
        >Show All</option>
       </select>
    </div>
    </FormRow>
    
    <FormRow title="Access">
      <Access {item}/>
    </FormRow>


    <!-- Additional FormRows for 'saveResponse', 'showIntro', 'showResult' properties -->

  </SectionHead>
