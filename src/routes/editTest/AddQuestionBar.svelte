<script>
// @ts-nocheck
import { BtnIconRound } from '$lib/cmp';
import { get } from '$lib/util';
import {questionsStore} from './store';
// $:questionsStore = $questionsStore;
 
import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "./fn/questionTypesData.js";

function addMCQ(){
  
  questionsStore.update(questions => {
  const mcq= getDataMCQ();
  const newQuestions = [... questions , mcq];
        return newQuestions;
    });
}
</script>


<div class='flex justify-center  mx-10 w-full'>
<BtnIconRound  icon='🔱' clk={addMCQ}   />
<!-- <BtnIconRound  icon='&#x1F4E7;' />
<BtnIconRound  icon='❶' />
<BtnIconRound  icon='&#x1F4C3;' />
<BtnIconRound  icon='&#x1F512;' />
<BtnIconRound  icon='&#x270F;' />
<BtnIconRound  icon='&#x1F310;' /> -->
</div>