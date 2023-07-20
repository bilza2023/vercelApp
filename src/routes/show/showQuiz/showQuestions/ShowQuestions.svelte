 <script>

import ShowMcq from "./ShowMcq.svelte";
// import ShowInputText from "./ShowInputText.svelte";
// import ShowInputEmail from "./ShowInputEmail.svelte";
// import ShowInputNumber from "./ShowInputNumber.svelte";
// import ShowInputPassword from "./ShowInputPassword.svelte";
// import ShowInputUrl from "./ShowInputUrl.svelte";
// import ShowParagraph from "./ShowParagraph.svelte";
export let questions;
export let cq;
// debugger;

</script>

    {#if questions[cq].questionType == "SurveyMCQ"}
      <ShowMcq {questions} {cq}/>
    {/if}
    
    {#if questions[cq].questionType == "SurveyInput"}
      <!-- <ShowInputText {questions} {cq}/> -->
    {/if}
    
    {#if questions[cq].questionType == "SurveyParagraph"}
      <!-- <ShowParagraph {questions} {cq}/> -->
    {/if}
    
    {#if questions[cq].questionType == "SurveyEmail"}
      <!-- <ShowInputEmail {questions} {cq}/> -->
    {/if}
   
    {#if questions[cq].questionType == "SurveyNumber"}
      <!-- <ShowInputNumber {questions} {cq}/> -->
    {/if}
   
    {#if questions[cq].questionType == "SurveyPassword"}
      <!-- <ShowInputPassword {questions} {cq}/> -->
    {/if}
   
    {#if questions[cq].questionType == "SurveyUrl"}
      <!-- <ShowInputUrl {questions} {cq}/> -->
    {/if}