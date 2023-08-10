// @ts-nocheck
import {Agent} from '$lib/ajax';
import { toast,get  } from '$lib/util';

import { questionsStore,itemStore } from '../store';
import questionContentStringify from './questionContentStringify';


export default async function save  ( ){
try{
debugger;
// console.log("questionsStore" , get(questionsStore));
// console.log("itemStore" , get(itemStore));
const item = get(itemStore);
const questions = await questionContentStringify(get(questionsStore));
item.questions = questions;
item.classId = '';
console.log("item" , item);
// item.classId = ''; since the test does not have a class id just the "run" has it. This will help us to keep the classId  = none and we will not save new runs with faluty classId. it needs to be set every time.
// return;  

 const resp = await Agent.update('test',{ item});

  if (resp.ok) {
      const data = await resp.json();
      //The store is already updated just update localstorage
    //   LocalStorage.updateTemplates();
      toast.push( "saved" );
  }else {
      const data = await resp.json();
      toast.push( data.message );
  }

}catch(e){
toast.push('Failed to save' );
}


}