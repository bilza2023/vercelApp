// @ts-nocheck
import {Agent} from '$lib/ajax';
import { toast,get  } from '$lib/util';

// import { templateLocalStore } from '../store.js';
// $:item = $templateLocalStore;
// $:questions = $questionsStore;


export default async function save  (item){
// item.classId = ''; since the test does not have a class id just the "run" has it. This will help us to keep the classId  = none and we will not save new runs with faluty classId. it needs to be set every time.
  // item.classId = '';

// console.log(item);return;  

 const resp = await Agent.update('test',{ item});

  if (resp.ok) {
    //   const data = await resp.json();
      //The store is already updated just update localstorage
    //   LocalStorage.updateTemplates();
      toast.push( "saved" );
  }else {
      toast.push( data.message );
  }

}