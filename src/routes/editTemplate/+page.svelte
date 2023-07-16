<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,Tf} from '$lib/cmp';
import Toolbar from './Toolbar.svelte'
import {onMount,toast} from '$lib/util';

const item = {
  title : 'The Title',
  introText : 'Welcome',
  farewellText : 'Goodbye',
  saveResponse : true,
  showIntro : true


}

onMount(async ()=>{
  try {
//   toast.push("ok");
  } catch (e) {
  
  }   
});

</script>

<!-- ************** -->
<PageWrapper>

<!-- ************** -->
<Toolbar />

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>Edit Tempalte</HdgWithIcon>
        </Centre>





        <div class='px-8'>
        <br/>
          <SectionHead  title="Kings Party">
                          
              <FormRow title="Quiz Title">
              <input type="text" class="w-full bg-gray-700 color-white"
              bind:value={item.title} 
              >
              </FormRow>

              <FormRow title="Intro Text">
              <textarea class="w-full bg-gray-700 color-white"
              bind:value={item.introText}></textarea>
              </FormRow>

              <FormRow title="Farewell Text">
              <textarea class="w-full bg-gray-700 color-white" bind:value={item.farewellText}></textarea>
              </FormRow>

              <FormRow title="Save Responses">
              <Tf obj={item} bool_prop="saveResponse" />
              </FormRow>

              <FormRow title="Show Intro">
              <Tf obj={item} bool_prop="showIntro" />
              </FormRow>
     
              <FormRow title="Show Results to user">
              <Tf obj={item} bool_prop="showResult" />
              </FormRow>
                      
          </SectionHead>
        </div>
        <!-- THE MAIN CODE ENDS -->
<br/>
<br/>
</PageWrapper>

