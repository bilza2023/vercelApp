// @ts-nocheck
import { toast , goto,get } from '$lib/util';
import {Agent} from '$lib/ajax';
import {showDeleteStore , itemStore} from '../store';


export default async function deleteFn(title){
    try{
     // debugger;
     const item = get(itemStore); 
     if (title !== item.title){
      toast.push('Title does not match');
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
    console.log( e );
    }

}