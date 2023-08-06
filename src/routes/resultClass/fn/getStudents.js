//@ts-nocheck
import {Agent} from '$lib/util';

 
export default async function getStudents(classId){
// debugger;
const resp = await Agent.where('student' , {whereItem : 'classId' , whereValue : classId});
          if (resp.ok){
            const data = await resp.json();
            const c = data.items;
            console.log("students",c);
            return c;
          }else {
          throw new Error('Students Not Found');
          }


}