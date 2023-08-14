I have 2 svelte components SettingMain.svelte (Parent) and SettingDiv.svelte (Child);

Both use store variable itemStore.
import {itemStore} from '../store';
$:item = $itemStore;
$: toggle = $itemStore.private;

I want the ClassDD in SettingMain component to disappear

{#if toggle}
        <SectionHead title={"Select Class"} icon={Icons.MANAGER}>
            <br />
              <ClassesDd {item}/>
            <br />
        </SectionHead>
{/if}        


when the item.private is changed from private to public .
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
What is wrong with this code this the reactivity does not happen

SettingsMain.svelte
<!-- Component.svelte -->
<script>
  // @ts-nocheck
import {SectionHead } from '$lib/cmp';
import {Icons} from '$lib/util';
import SettingDiv from './SettingDiv.svelte';  
import PublishTimings from './PublishTimings.svelte';  
import UnPublishTimings from './UnPublishTimings.svelte';  
import ClassesDd from "$lib/appComp/ClassesDD.svelte";

// let toggle = true;
import {itemStore} from '../store';
$:item = $itemStore;
$: toggle = $itemStore.private;

</script>

<br/>
<SettingDiv />
<br/>
{#if toggle}
        <SectionHead title={"Select Class"} icon={Icons.MANAGER}>
            <br />
              <ClassesDd {item}/>
            <br />
        </SectionHead>
{/if}        
<br/>
<PublishTimings {item} />
<br/>
<UnPublishTimings {item} />
<br/>

SettingDiv.svelte
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
