// @ts-nocheck
import {Agent, toast , goto,get } from '$lib/util';
import {itemStore,showDeleteStore} from '../store';
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==

export default async function deleteFn(newTitle){
    try{
  // debugger;1
  let item = get(itemStore);
  if (item.title !== newTitle){
    toast.push('The Title does not match');
    return;
  }
     const resp = await Agent.del('test',{ id : item._id });

      if (resp.ok == true){
        showDeleteStore.set(false);
        goto("/tests");
        toast.push('deleted');
      }else {
        const data = await resp.json();
        toast.push(data.message);
      }
    }catch(e){
        const data = await resp.json();
        toast.push(data.message);
    }

}