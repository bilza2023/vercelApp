//@ts-nocheck
import { templateLocalStore } from '../store';

// $: item = $templateLocal;

import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "./questionTypesData.js";

//////////////////////////////
export default function  addMCQ ( ) {
  // debugger;
  const qs = getDataMCQ();
        templateLocalStore.update((cur) => {
        return {
          ...cur,
          questions: [...cur.questions, qs],
        };
      });
}