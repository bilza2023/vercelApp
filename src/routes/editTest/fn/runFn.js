// @ts-nocheck
import { Agent,toast} from '$lib/util';
import stringifyContent from './stringifyContent';
import combQnQdeep from './combQnQdeep';
import {showRunDlgStore} from '../store';
///////////////////////////////////////////////// 
/////////////////////////////////////////////////
 
export default async function  runFn(  ) {
    try{
    // debugger;
    let  item = combQnQdeep();
    item  = await stringifyContent(item);

    // ////////////========== Test
    if (item.title === ''){
        toast.push('Missing title');
        return;
    }    
// ////////////========== Test
 if (item.classId  === '' || item.classId  === null ){
    toast.push('Assign a Class to the test');
    return;
 }    
    
// console.log("item before Run" , item);    
    item.testId = item._id;
    item._id = null;
    // item.title = title;
    item.published = true; //changed ??????
    item.createdAt =  new Date();
    //////////////////////////////////////
    // const resp = await ajaxPost(`${BASE_URL}/survey/save` ,{survey});
        const resp = await Agent.create('run',{item});
        if (resp.ok) {
            // const data = await resp.json();
            showRunDlgStore.set(false);
            toast.push( "Test is Running now" );
        }else {
            toast.push( "Failed to Run test" );
        }
    
    }catch(e){
        toast.push(e.message);
    }
}