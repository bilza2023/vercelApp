


export default function checkMCQ(question,errorsArray){

    checkAllCorrectOptionsExists(question,errorsArray);
    checkOptionMissingStatements(question,errorsArray);
    atleastOneCorrectOption(question,errorsArray);
    atleastTwoOptions(question,errorsArray);

}
///////////////////////////////
function checkAllCorrectOptionsExists(question,errorsArray) {
  const optionsIds = question.options.map(option => option.id);
 
 const result =  question.correctOptions.every(correctOptionId => optionsIds.includes(correctOptionId));
  
  if (!result) {
    errorsArray.push("Some correct options do not have a corresponding option");
    }
}

function atleastOneCorrectOption(question,errorsArray){
    if (question.correctOptions.length < 1 ){
        const st = `Question: ${question.content.substring(0, 20)}  ----> does not have even a single correct option selected`;
            errorsArray.push(st);
    }

}
function atleastTwoOptions(question,errorsArray){
    if (question.options.length < 2 ){
        const st = `Question: ${question.content.substring(0, 20)}  ----> There should be atleast two options in a multiple choice question.`;
            errorsArray.push(st);
    }

}
function checkOptionMissingStatements(question,errorsArray){

    for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
            if ( option.content == "") {
            const st = `Question: 
            ${question.content.substring(0, 20)}  ::: -> has missing content in option
            `;
            
            errorsArray.push(st);
    }
}
}