// @ts-nocheck
import { v4 as uuid } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';
import transformQ2R from "../transformQ2R";

import {pageStateStore, studentIdStore } from '../store.js';

import {Agent} from "$lib/ajax";

export default async function saveResults  (){
  try{
    let quizResult = {};
    quizResult.answers = await transformQ2R(quiz);
    quizResult.userId = quiz.userId;
    
    quizResult.id = uuid(); 
    // quizResult.quizId = quiz._id; 
    quizResult.runId = quiz._id; 
    quizResult.runTitle = quiz.title; 
    quizResult.testId = quiz.testId; //importantay 
    quizResult.studentId = studentId; //here
    
    console.log("quizResult after check before save" ,quizResult);
    // const resp = await ajaxPost(`${BASE_URL}/result/save`,{ quizResult, quiz } ); 
    const resp = await Agent.create('result', {item :quizResult});
      if (resp.ok){
          // console.log("resp",resp)
            pageStateStore.set('goodbye');
          // console.log("outro",$pageStateStore)
          toast.push("results saved");
      }else {
        const data = await resp.json();
          hideSaveBtn = false;
          toast.push(data.errormsg);
          pageStateStore.set('goodbye');
   }
  // pageStateStore.set('goodbye');
  }catch (e) {
  
  }
}
