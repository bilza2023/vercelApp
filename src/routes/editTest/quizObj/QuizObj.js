//@ts-nocheck
//EditQuizObj is a wrapper around itemStore.and also contains questionObj
import { itemStore ,questionsStore,visibleDialogStore} from '../store.js';
import QuestionsObj from './QuestionsObj.js';
import {get,Agent,goto,toast} from "$lib/util";
import quizStringify from './quizStringify.js';
import combQnQdeep from '../fn/combQnQdeep.js';

export default class QuizObj  {

    constructor(){
        this.questions = new QuestionsObj();
    }

    set(value) {
        itemStore.set(value);    
    }

    async delete(title){
        try{
            // debugger;
            const item = get(itemStore); 
            if (title !== item.title){
                toast.push('Title does not match');
                return;
            }

            const resp = await Agent.del('test',{ id : item._id });

            if (resp.ok == true){
                visibleDialogStore.set('');
                goto("/tests");
                toast.push('deleted');
            }else {
                const data = await resp.json();
                toast.push(data.message);
            }
        }catch(e){
            console.log( e );
        }
    }

    async clone(title){
        try{
      //   debugger;
            let  item = getDeepCopy();
            item  = await quizStringify(item);

            const resp = await Agent.create('test' , {title});
            if (resp.ok) {
                const data  = await resp.json();
                const newItem = data.item;
                item._id = newItem._id;
                item.title = title;

                const resp2 = await Agent.update('test',{ item });

                if (resp2.ok){
                    toast.push( "Cloned" );
                    visibleDialogStore.set('');
                }else {
                    toast.push( "failed to clone" );        
                }
            }else {
                toast.push( "failed to clone" );        
            }
        }catch(e){
            console.log( e );
        }
    }
    async run(){
       try{
    let  item = combQnQ();
    // ////////////========== Test
    if (item.title === ''){
        toast.push('Missing title');
        return;
    }    
      // debugger;
   // ////////////========== Test
   if (item.private === true){ // if private only then needs classId
   if (item.classId  === '' || item.classId  === null ){
      toast.push('Assign a Class to the test');
      return;
   }    
   }
    
// console.log("item before Run" , item);    
    item.testId = item._id;
    item._id = null;
    // item.title = title; //-use later to set new title
    item.published = true; //changed ??????
    item.createdAt =  new Date();
    //////////////////////////////////////
    // last step stringify questions
    item  = await quizStringify(item);
        const resp = await Agent.create('run',{item});
        if (resp.ok) {
            // const data = await resp.json();
            visibleDialogStore.set('');
            toast.push( "Test is Running now" );
        }else {
            toast.push( "Failed to Run test" );
        }
    
    }catch(e){
        toast.push(e.message);
    }
    }
}//class obj ends

///////////////////////////////////////////////////
async function getDeepCopy(){
        ///XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX////
        //--- get deep copy of Quiz
        let quiz = await JSON.parse(JSON.stringify(  get(itemStore) ));
        //--- get deep copy of Questions
        ///XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX////
        let questions = await JSON.stringify(  get(questionsStore) );
        //--- combine both 
        quiz.questions = questions;
        return quiz;
}

function combQnQ(){
let quiz =   get(itemStore);
let questions = get(questionsStore); 
quiz.questions = questions;
return quiz;
}