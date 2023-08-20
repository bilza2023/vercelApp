//@ts-nocheck

import checkQuiz from "./checkQuiz";
import checkQuestion from "./checkQuestion";
import checkMCQ from "./checkMCQ";
import checkMCQMultiSelect from "./checkMCQMultiSelect";
import checkMCQSingleSelect from "./checkMCQSingleSelect";


export default function checkBeforePub(quiz){
const errorsArray = [];
// errorsArray.push("Test");
checkQuiz(quiz,errorsArray);


        for (let i = 0; i < quiz.questions.length; i++) {
            const question = quiz.questions[i];
                checkQuestion(question,errorsArray);

            if (question.questionType === 'SurveyMCQ'){
                checkMCQ(question,errorsArray);
                    if (question.multiSelect == true){
                        checkMCQMultiSelect(question,errorsArray);
                    }else{
                        checkMCQSingleSelect(question,errorsArray);
                    }

            }else {
                        // no test yet 
                        // checkInput(question,errorsArray);
            }
            
        }
return errorsArray;
}