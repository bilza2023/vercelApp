// @ts-nocheck

export default async function checkTest(quiz){
const errorsArray = [];
// errorsArray.push("Test");
    await checkQuiz(quiz,errorsArray);

return errorsArray;
}

async function checkQuiz(quiz ,errorsArray){

    checkTitle(quiz,errorsArray);
    checkQuestionsNo(quiz ,errorsArray);
    mustHaveOneMember(quiz ,errorsArray);

}

///////////////////////////
function mustHaveOneMember(quiz ,errorsArray){
      if ( quiz.members.length < 1 ) {
        const st = `There are no members / students attached to this product`;
            errorsArray.push(st);
    }
}

function checkTitle(quiz ,errorsArray){
if (quiz.title == ""){
        errorsArray.push("Title can not be empty");
    }

}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
function checkQuestionsNo(quiz ,errorsArray){
    if (quiz.questions.length == 0){
        errorsArray.push("Quiz must have at least one question");
    }
}
//////////////////////////////////////////////