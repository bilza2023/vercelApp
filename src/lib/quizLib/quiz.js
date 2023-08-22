//@ts-nocheck
import { v4 as uuid } from 'uuid';
import Content from "./content";

///////////////////////////Class Begins//////////
export default class QuizObj{

constructor(userId){
        this.title = 'Quiz';
        this.userId = userId;
        this.saveResponse = true;
        this.showIntro = true;
        this.introText = 'Welcome';
        this.showResult = true;
        this.showfarewellText = true;
        this.farewellText = 'Farewell';
        this.classId = '';
        this.createdAt= Date.now(); // Corrected line
        this.members = [];
        this.marks = 10;
        this.publishObj ={};
        this.tags= [];
        this.displayQOneByOne= false;
        this.private= true;
//----
        this.questions = [];
// this.qObj = new QuestionsObj();        
}

addMCQ (){
const correctId = uuid();
    this.questions.push(
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

///////////////////////////
} //quizObj
///////////////////////////
