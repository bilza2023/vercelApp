<script>
// @ts-nocheck
import { SectionHead, FormRow, Tf } from '$lib/cmp';

import {itemStore} from '../store';
$:item = $itemStore;



</script>



  <SectionHead title={item.title}>
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
       <select class='bg-gray-700 text-white w-10/12 m-1 p-1 min-h-[40px]'
         bind:value={item.displayQOneByOne} >
        <option class='text-center w-full mx-4' value={true} 
        selected={item.displayQOneByOne === true}
        >One By One</option>
        <option class='text-center w-full mx-4' value= {false}
        selected={item.displayQOneByOne === false}
        >Show All</option>
       </select>
    </FormRow>
    
    <FormRow title="Access">
       <select class='bg-gray-700 text-white w-10/12 m-1 p-1 min-h-[40px]'
         bind:value={item.private} 
         >
        <option class='text-center w-full mx-4' value={true} 
        selected={item.private === true}
        >Private</option>
        <option class='text-center w-full mx-4' value={false}
        selected={item.private === false}
        >Public</option>
       </select>
    </FormRow>

    <!-- Additional FormRows for 'saveResponse', 'showIntro', 'showResult' properties -->

  </SectionHead>
