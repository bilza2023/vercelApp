// @ts-nocheck
import {Agent, toast , goto } from '$lib/util';
////////////////////////////////////////////////==

export default async function deleteFn(id ){
    try{
  debugger;
     const resp = await Agent.del('student',{ id  });

      if ( resp.ok == true ){
        toast.push('Deleted!');
        goto('/students');
      }else {
        const data = await resp.json();
        toast.push(data.message);
      }
    }catch(e){
        const data = await resp.json();
        toast.push(data.message);
    }

}