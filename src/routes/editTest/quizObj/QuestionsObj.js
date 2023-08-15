//@ts-nocheck
import { questionsStore } from '../store.js';

import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "../fn/questionTypesData.js";


///////////////////////////////////////////////////
///////////////////////////////////////////////////

export default class QuestionsObj  {

constructor(){
   this.noContentMessage = 'No Content Yet';
}

set(value) {
   questionsStore.set(value);    
}

delete (id) {
   questionsStore.update(questions => {
   const updatedQuestions = questions.filter(question => question.id !== id);
   return updatedQuestions;
   });
}
//addMCQ
addMCQ(){  
  questionsStore.update(questions => {
  const mcq= getDataMCQ();
  const newQuestions = [... questions , mcq];
        return newQuestions;
    });
}

}//class obj ends
