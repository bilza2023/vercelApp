//@ts-nocheck
//EditQuizObj is a wrapper around itemStore.and also contains questionObj
import { itemStore, questionsStore, visibleDialogStore } from '../store.js';
import QuestionsObj from './QuestionsObj.js';
import { get, Agent, goto, toast } from "$lib/util";

export default class QuizObj {

    constructor() {
        this.questions = new QuestionsObj();
    }

    set(value) {
        itemStore.set(value);
    }

    
    async save() {
        try {
            // debugger;
            let item = combQnQ();
            // item.classId = ''; since the test does not have a class id just the "run" has it. This will help us to keep the classId  = none and we will not save new runs with faluty classId. it needs to be set every time.
            item.classId = '';
            //--This is no longer required since the question.content are not strigified now
            // item = await quizStringify(item);

            const resp = await Agent.update('test', { item });

            if (resp.ok) {
                const data = await resp.json();
                toast.push("saved");
            } else {
                const data = await resp.json();
                toast.push(data.message);
            }

        } catch (e) {
            toast.push('Failed to save');
        }
    }
}//class obj ends
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
function combQnQ() {
    let quiz = get(itemStore);
    let questions = get(questionsStore);
    quiz.questions = questions;
    return quiz;
}
async function quizStringify (item){
 
 for (let i = 0; i < item.questions.length; i++) {
    item.questions[i].content = JSON.stringify(item.questions[i].content);
  }
//  item.questions = questions;
 return item;

}