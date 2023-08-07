//@ts-nocheck
import {Agent} from '$lib/util';

 
export default async function getResults(tests){

  // debugger;

for (var i = 0; i < tests.length; i++){

  const resp = await Agent.where('result' , {whereItem : 'runId' , whereValue : tests[i]._id});
          if (resp.ok){
            const data = await resp.json();
            tests[i].results  = data.items;
          }else {
          // throw new Error('Results Not Found');
          }
}

}