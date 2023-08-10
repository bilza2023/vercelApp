// @ts-nocheck
import {Agent, toast , goto } from '$lib/util';
import {itemsStore} from '../store';
import getItems from './getItems';
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==
////////////////////////////////////////////////==

export default async function deleteFn(id ){
    try{
//   debugger;
     const resp = await Agent.del('run',{ id  });

      if ( resp.ok == true ){
        const returnItems = await getItems();
            if (returnItems){
                itemsStore.set(returnItems);
                toast.push('Deleted!')
            }else {
                toast.push('failed to refresh');
            }
      }
    }catch(e){
        const data = await resp.json();
        toast.push(data.message);
    }

}