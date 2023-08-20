//@ts-nocheck
// import { v4 as uuid } from 'uuid';
//-for now questions obj is just a grou of methods that act upon the questions data inside quiz. leter we can change that.

import Questions from "./Questions.js";


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
        this.questions = new Questions(userId);
// this.qObj = new QuestionsObj();        
}

///////////////////////////
} //quizObj
///////////////////////////
