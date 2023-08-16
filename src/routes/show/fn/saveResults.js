// @ts-nocheck
import { v4 as uuid } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';
import transformQ2R from "./transformQ2R";

import { studentIdStore,studentNameStore } from '../store.js';

import {Agent,get} from "$lib/util";
import nextPageState from '../fn/nextPageState.js';
import { itemStore } from '../store';
/////////////////////////////////////////////////////
 
export default async function saveResults  ( ){
  try{
    // debugger;
    let quiz = get  (  itemStore );
    //--For Now we are not using th savResponse flag which we already have in quiz Model We simply only save private.
    if ( quiz.private === false){
      //-if public send from here for result or goodbye
       nextPageState();
        return false;
    }
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
    //======
    const resp = await Agent.create('result', {item :quizResult});
      if (resp.ok){
          //-if private send from here for result or goodbye
          nextPageState();
          toast.push("results saved");
      }else {
        const data = await resp.json();
        toast.push(data.message);
        // nextPageState();
    }
  }catch (e) {
        toast.push(e.message);
  }
}
