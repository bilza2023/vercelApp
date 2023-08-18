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

    async delete(title) {
        try {
            //debugger;
            const item = get(itemStore);
            if (title !== item.title) {
                toast.push('Title does not match');
                return;
            }

            const resp = await Agent.del('test', { id: item._id });

            if (resp.ok == true) {
                visibleDialogStore.set('');
                goto("/tests");
                toast.push('deleted');
            } else {
                const data = await resp.json();
                toast.push(data.message);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async clone(title) {
        try {
            //debugger;

            let item = combQnQ();

            const resp = await Agent.create('test', { title });
            if (resp.ok) {
                const data = await resp.json();
                const newItem = data.item;
                item._id = newItem._id;
                item.title = title;
                item.classId = ''; //dont save classId
                //--here stringify
                item = await quizStringify(item);

                const resp2 = await Agent.update('test', { item });

                if (resp2.ok) {
                    toast.push("Cloned");
                    visibleDialogStore.set('');
                } else {
                    toast.push("failed to clone");
                }
            } else {
                toast.push("failed to clone");
            }
        } catch (e) {
            console.log(e);
        }
    }
    async run() {
        try {
            //debugger;
            // getDeepCopy has combined the quiz and questions and in the process the questions.content has also become strignified. BUT it is ok since we have to use quiz.title/classId/private etc and we are not using quiz.questions so they are ok for DB just do not re-stringify them.
            let item = combQnQ();
            // ////////////========== Test
            if (item.title === '') {
                toast.push('Missing title');
                return;
            }
            // ////////////========== Test
            if (item.private === true) { // if private only then needs classId
                if (item.classId === '' || item.classId === null) {
                    toast.push('Assign a Class to the test');
                    return;
                }
            }
            item.testId = item._id;
            item._id = null;
            // item.title = title; //-use later to set new title
            item.published = true; //changed ??????
            item.createdAt = new Date();
            //////////////////////////////////////
            //--here stringify
            item = await quizStringify(item);
            //////////////////////////////////////
            const resp = await Agent.create('run', { item });
            if (resp.ok) {
                visibleDialogStore.set('');
                toast.push("Test is Running now");
            } else {
                toast.push("Failed to Run test");
            }

        } catch (e) {
            toast.push(e.message);
        }
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