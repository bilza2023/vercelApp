<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading,SectionHeadIcon} from '$lib/cmp';
import {onMount,toast,fade,Agent} from '$lib/util';

import Toolbar from './Toolbar.svelte';

let question = '';
onMount(async ()=>{
  try{
  // debugger;
    // const quizId = new URLSearchParams(location.search).get("quizId");
    // const resp = await Agent.readone('test' , {id: quizId });
    // if (resp.ok){
    //   const data = await resp.json();
    //   question = new QuizObj(data.item);
    // }else {
        // toast.push('failed to load');
    // }
  } catch (e) {
       toast.push('failed to load');
  }      
});

import MainNav from '$lib/appComp/MainNav.svelte';
/////////////////////////////////////////////////////////////////
</script>
  <!-- ****************************************** -->
<MainNav/>
<PageWrapper>

<Toolbar  {question}/>

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>{'Banana'}</HdgWithIcon>
        </Centre>

     
<!-- <Loading /> -->

<br>
<br>
<br>
<br>
<br>
<br>
</PageWrapper>
