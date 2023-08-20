

export default function checkQuestion(question,errorsArray){

    checkstatement(question,errorsArray);

   

}

////////////////////////////////////

function checkstatement(question,errorsArray) {
     if (question.content == "") {
    errorsArray.push("The Question is missing statement");
    }
}

