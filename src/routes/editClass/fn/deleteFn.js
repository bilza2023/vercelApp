// @ts-nocheck
import {Agent, toast , goto } from '$lib/util';
// import {itemsStore} from '../store';
// import getItems from './getItems';
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==

export default async function deleteFn(id ){
    try{
  debugger;
     const resp = await Agent.del('class',{ id  });

      if ( resp.ok == true ){
        toast.push('Deleted!');
        goto('/classes');
      }else {
        const data = await resp.json();
        toast.push(data.message);
      }
    }catch(e){
        const data = await resp.json();
        toast.push(data.message);
    }

}