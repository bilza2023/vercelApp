//@ts-nocheck
import {Agent} from '$lib/util';

 
export default async function getTests(classId){
// debugger;
const resp = await Agent.where('run' , {whereItem : 'classId' , whereValue : classId});
          if (resp.ok){
            const data = await resp.json();
            const c = data.items;
            console.log("tests",c);
            return c;
          }else {
          throw new Error('Students Not Found');
          }


}