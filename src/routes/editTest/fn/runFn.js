// @ts-nocheck
import {Agent,toast,get} from '$lib/util';
import {showRunDlgStore  , questionsStore} from '../store';
import questionContentStringify from './questionContentStringify';
// import checkTest from './checkTest'; 
///////////////////////////////////////////////// 
/////////////////////////////////////////////////
 
export default async function  runFn(item ) {
    try{
    debugger;
// const item = get(itemStore);
const questions = await questionContentStringify(get(questionsStore));
item.questions = questions;    
//     const item = {... get(itemStore) };
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