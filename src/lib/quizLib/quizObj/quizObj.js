//@ts-nocheck
// import { v4 as uuid } from 'uuid';



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
        this.questions = [];
        this.publishObj ={};
        this.tags= [];
        this.displayQOneByOne= false;
        this.private= true;
}

///////////////////////////
} //quizObj
///////////////////////////
