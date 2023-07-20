<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading} from '$lib/cmp';
import SettingsMain from './SettingsMain.svelte';
import Toolbar from './Toolbar.svelte'
import QuestionsROM from './QuestionsROM.svelte';
import PublishTimings from './PublishTimings.svelte';
import Teams from './Teams.svelte';
import UnPublishTimings from './UnPublishTimings.svelte';
import {onMount,toast,get} from '$lib/util';
import { Agent } from '$lib/ajax';

let item;
onMount(async ()=>{
  try {
//   toast.push("ok");
  // debugger;
   const quizId = new URLSearchParams(location.search).get("quizId");
   const resp = await Agent.readone('test' , {id: quizId });
    //  console.log(item);
    if (resp.ok){
      const data = await resp.json();
      item = data.item;
    //   console.log('item',item);
    }else {
    toast.push('failed to load');
    }
  }catch(e) {
    toast.push('failed to load');
  }
});

</script>

<!-- ************** -->
<PageWrapper>
{#if  item != null}
<!-- ************** -->
<Toolbar />

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
            <HdgWithIcon icon='📜'>Edit Test</HdgWithIcon>
        </Centre>
        <br/>
            
        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
            <SettingsMain {item} />
        </div>
       
        <!-- Teams -->
        <br/>
        <div class='px-8'>
            <Teams {item} />
        </div>
        
        <!-- PublishTimings -->
        <br/>
        <div class='px-8'>
            <PublishTimings {item} />
        </div>
        
        <!-- UnPublishTimings -->
        <br/>
        <div class='px-8'>
            <UnPublishTimings {item} />
        </div>
       
        <!-- THE Question -->
        <br/>
        <div class='px-8'>
            <QuestionsROM questions= {item.questions} title={'Questions (Read Only)'} />
        </div>
<br/>
<br/>
{:else}
<Loading />
{/if}
</PageWrapper>
