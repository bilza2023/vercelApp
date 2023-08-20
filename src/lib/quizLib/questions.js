//@ts-nocheck
import uuid from './fn/uuid.js';
import Content from './content.js';
////////////////////////////////////
export default class Questions {

constructor(userId){
this.userId = userId;
this.questionsArray = [];

}
getQuestions(){
return this.questionsArray;
}
getContent(questionIndex){
 return this.questionsArray[ questionIndex  ].content.getContent();
}


//---Adding Questions
addMCQ (){
const correctId = uuid();
    this.questionsArray.push(
     {
        id : uuid(),
        content : new Content(),
        required : false,
        explanation : "",
        multiSelect: false,
        selectedOptions :[],
        correctOptions :[correctId],
        displayOptions : 'bars',
        questionType : 'mcq',
        options :[
        {id : correctId , content : ""},
        {id : uuid() , content : ""}
        ]
    });
}//----
//---Add to content
addDiv(questionIndex){
    this.questionsArray[ questionIndex  ].content.addDiv();
}


}//