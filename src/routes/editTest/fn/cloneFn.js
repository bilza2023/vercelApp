// @ts-nocheck
import {toast} from '$lib/util';
import {Agent} from '$lib/ajax';
import { showCloneStore } from '../store';

/**
 * @param {any} newTitle
 */

export default async function cloneFn(newTitle,item) {  
    try{
const resp = await Agent.create('template' , {title : newTitle});
//   debugger;
  if (resp.ok){
  const data  = await resp.json();
  const newItem = data.item;

  item._id = data.item._id;
  item.title = newTitle;
  // newItem.isNew = true;

  const resp2 = await Agent.update('template' , {item : item});
  
      if (resp2.ok){

        const data = await resp2.json();
        toast.push( "Cloned" );
        showCloneStore.set(false);

      }else {

      toast.push( "failed to clone" );        

      }
  }else {
    toast.push( "failed to clone" );        
  }

    }catch(e){
    console.log( e );
    }
}