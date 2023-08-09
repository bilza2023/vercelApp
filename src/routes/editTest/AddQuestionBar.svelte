<script>
// @ts-nocheck
export let addQuestion;
import { BtnIconRound } from '$lib/cmp';
 
import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "./fn/questionTypesData.js";
</script>


<div class='flex justify-center  mx-10 w-full'>
<BtnIconRound  icon='🔱' clk={()=>addQuestion(getDataMCQ())}   />
<BtnIconRound  icon='&#x1F4E7;' />
<BtnIconRound  icon='❶' />
<BtnIconRound  icon='&#x1F4C3;' />
<BtnIconRound  icon='&#x1F512;' />
<BtnIconRound  icon='&#x270F;' />
<BtnIconRound  icon='&#x1F310;' />
</div>