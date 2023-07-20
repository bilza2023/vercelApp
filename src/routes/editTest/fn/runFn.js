// @ts-nocheck
import {toast} from '$lib/util';
import {Agent} from '$lib/ajax';


export default async function  runFn(incomming,newName) {
    try{
    debugger;
    const item = {...incomming };
    item.testId = item._id;
    item._id = null;
    item.title = newName;
    item.published = true; //changed
    item.createdAt =  new Date();
    //////////////////////////////////////
    // const resp = await ajaxPost(`${BASE_URL}/survey/save` ,{survey});
    const resp = await Agent.create('run',{item});
    if (resp.ok) {
        // const data = await resp.json();
        toast.push( "Test is Running now" );
    }else {
        toast.push( "Failed to Run test" );
    }
        // showErrorsStore.set(false);
        // showRunStore.set(false);
    
    }catch(e){
        toast.push(e.message);
    }
}
