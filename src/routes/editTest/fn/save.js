// @ts-nocheck
import { Agent,toast} from '$lib/util';
import stringifyContent from './stringifyContent';
import combQnQdeep from './combQnQdeep';

//////////////////////////////////////
export default async function save  ( ){
try{
  // debugger;
  let  item = combQnQdeep();
  item  = await stringifyContent(item);

  // item.classId = ''; ---for now not required
  // item.classId = ''; since the test does not have a class id just the "run" has it. This will help us to keep the classId  = none and we will not save new runs with faluty classId. it needs to be set every time.

  const resp = await Agent.update('test',{ item});

  if (resp.ok) {
      const data = await resp.json();
      toast.push( "saved" );
  }else {
      const data = await resp.json();
      toast.push( data.message );
  }

  }catch(e){
  toast.push('Failed to save' );
  }
}//save end