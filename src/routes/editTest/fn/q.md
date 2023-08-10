this is a save function from my svelte app. i am trying to save an item which is stored in svelte store variable itemStore.

I have made a deep copy of the variable so that before saving i have to make some changes before the data go into database but i do not want to change itemStore present in the merory.

major change is 
item  = await stringifyContent(item);

However when i console.log("get(itemStore)",get(itemStore));
i see that the itemStore has also been changed WHY?

save.js
// @ts-nocheck
import { Agent,toast,get  } from '$lib/util';
import { itemStore } from '../store';
import stringifyContent from './stringifyContent';


//////////////////////////////////////
export default async function save  ( ){
try{
debugger;
const  itemTemp = get(itemStore);
let item = {...itemTemp};    
item  = await stringifyContent(item);
console.log("new item",item);
console.log("get(itemStore)",get(itemStore));
return ;
// item.classId = ''; ---for now not required
// console.log("item before save" , item);
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
stringifyContent.js

//@ts-nocheck


export default async function stringifyContent (item){
 
 for (let i = 0; i < item.questions.length; i++) {
    item.questions[i].content = JSON.stringify(item.questions[i].content);
  }
//  item.questions = questions;
 return item;

}