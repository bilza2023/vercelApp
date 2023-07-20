// @ts-nocheck
import {Agent} from '$lib/ajax';
import { toast,get  } from '$lib/util';


export default async function save  (item){
debugger;
 const resp = await Agent.update('test',{ item});

  if (resp.ok) {
    //   const data = await resp.json();
      //The store is already updated just update localstorage
    //   LocalStorage.updateTemplates();
      toast.push( "saved" );
  }else {
      toast.push( data.message );
  }

}