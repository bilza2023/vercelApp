//@ts-nocheck
import {Agent} from '$lib/util';


export default async function getClass(id){
const resp = await Agent.readone('class' , {id});
          if (resp.ok){
            const data = await resp.json();
            const c = data.item;
            console.log("classObj",c);
            return c;
          }else {
          throw new Error('Class Not Found');
          }


}