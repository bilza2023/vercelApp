// @ts-nocheck
import {Agent, toast , goto,get } from '$lib/util';
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==

export default async function deleteFn(id ){
    try{
  debugger;
     const resp = await Agent.del('run',{ id  });

      if (resp.ok == true){
        goto("/running");
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