// @ts-nocheck
import { toast , goto } from '$lib/util';
import {Agent} from '$lib/ajax';
import {showDeleteStore} from '../store';


export default async function deleteFn(id){
    try{
    // debugger;
     const resp = await Agent.del('test',{ id });

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