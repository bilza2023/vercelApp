// @ts-nocheck
import { v4 as uuid } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';
import transformQ2R from "./transformQ2R";

import { studentIdStore,studentNameStore } from '../store.js';

import {Agent,get} from "$lib/util";

import { itemObject } from '../store';
import { get } from '$lib/util';

export default async function saveResults  ( ){
  try{
    debugger;
    let quiz = get  (  itemObject);

    if (quiz.saveResponse === false){
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
          nextPageState();
          toast.push("results saved");
      }else {
        const data = await resp.json();
        toast.push(data.message);
        nextPageState();
    }
  }catch (e) {
        toast.push(e.message);
  }
}
