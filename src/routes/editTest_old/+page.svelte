<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading,InputForm,SectionHead} from '$lib/cmp';
import SettingsMain from './SettingsMain.svelte';
import Toolbar from './Toolbar.svelte'
import QuestionsROM from './QuestionsROM.svelte';
import PublishTimings from './PublishTimings.svelte';
import UnPublishTimings from './UnPublishTimings.svelte';
import {onMount,toast,Icons} from '$lib/util';
import { Agent } from '$lib/ajax';
import ClassesDd from "../../lib/appComp/ClassesDD.svelte";
import HiddenDivs from './HiddenDivs.svelte';
import RunDiv from './RunDiv.svelte';


import {showRunDlgStore,itemStore} from './store';
$: showRunDlg = $showRunDlgStore;
$: item = $itemStore;

onMount(async ()=>{
  try {
   const quizId = new URLSearchParams(location.search).get("quizId");
   const resp = await Agent.readone('test' , {id: quizId });
      if (resp.ok){
        const data = await resp.json();
          itemStore.set(data.item);
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
<Toolbar {item}/>

{#if showRunDlg}
<RunDiv />
{/if}
        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
            <HdgWithIcon icon='📜'>Edit Test</HdgWithIcon>
        </Centre>
        <br/>
            
        <!-- ********** The Hidden Dialogue box **************** -->
            <HiddenDivs  {item} />
        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
            <SettingsMain {item} />
        </div>
       
        <!-- Teams -->
        <br/>
        <div class='px-8'>
        <SectionHead title={"Select Class"} icon={Icons.MANAGER}>
            <br />
              <ClassesDd {item}/>
            <br />
        </SectionHead>

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
