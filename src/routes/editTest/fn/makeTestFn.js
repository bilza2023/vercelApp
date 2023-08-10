// @ts-nocheck
import { toast } from "@zerodevx/svelte-toast";
import { Agent } from "$lib/util";
import checkBeforePub from './check/checkBeforePub.js';
import {showTestStore , errorsArrayStore } from '../store';
//////////////////////////////////////////////////////

export default async function makeTest(title,item){
debugger;
// showTestStore.set(false);return;
    const errorsArray = checkBeforePub(item);
      if (errorsArray.length > 0){
          errorsArrayStore.set(errorsArray);
          showTestStore.set(false);
          return;
      }
  
  //  // userId is already set
  const newitem = {...item}; 
    newitem._id = undefined;
    newitem.published = false; //important
    newitem.members = []; //important
    newitem.isNew = true;
    newitem.title = title //--new title
    newitem.createdAt = Date.now();
  
 const resp = await Agent.create('test',{item : newitem});

  if (resp.ok) { 
      const data = await resp.json();
      showTestStore.set(false);
      toast.push( "New Test Created" );


  }else {
      const data = await resp.json();
      toast.push( data.message );
  }


}//fn ends