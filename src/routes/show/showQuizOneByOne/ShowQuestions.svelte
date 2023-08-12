 <script>
//@ts-nocheck
import ShowMcq from "./ShowMcq.svelte";

export let questions;
export let cq;
// debugger;

</script>

    {#if questions[cq].questionType == "SurveyMCQ"}
      <ShowMcq {questions} {cq}/>
    {/if}
    
    