// @ts-nocheck
import { v4 as uuid } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';
import transformQ2R from "./transformQ2R";

import {pageStateStore, studentIdStore,studentNameStore } from '../store.js';

import {Agent,get} from "$lib/util";

export default async function saveResults  (quiz){
  try{
    // debugger;
    let quizResult = {};
    quizResult.answers = await transformQ2R(quiz);
    quizResult.userId = quiz.userId;
    
    quizResult.id = uuid(); 
    // quizResult.quizId = quiz._id; 
    quizResult.runId = quiz._id; 
    quizResult.runTitle = quiz.title; 
    quizResult.classId = quiz.classId; //importantay 
    quizResult.studentId = get(studentIdStore) ; //here
    quizResult.studentName = get(studentNameStore) ; //here
    
    // console.log("quizResult after check before save" ,quizResult);
    // const resp = await ajaxPost(`${BASE_URL}/result/save`,{ quizResult, quiz } ); 
    const resp = await Agent.create('result', {item :quizResult});
      if (resp.ok){
          // console.log("resp",resp)
            pageStateStore.set('goodbye');
          // console.log("outro",$pageStateStore)
          toast.push("results saved");
      }else {
      debugger;
        const data = await resp.json();
          // hideSaveBtn = false;
          toast.push(data.message);
          pageStateStore.set('goodbye');
   }
  // pageStateStore.set('goodbye');
  }catch (e) {
    toast.push(e.message);
  }
}
