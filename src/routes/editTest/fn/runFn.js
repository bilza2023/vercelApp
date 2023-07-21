// @ts-nocheck
import {toast,get} from '$lib/util';
import {Agent} from '$lib/ajax';
import {showRunDlgStore,itemStore} from '../store';


export default async function  runFn(title) {
    try{
    // debugger;
    const item = {... get(itemStore) };
    item.testId = item._id;
    item._id = null;
    item.title = title;
    item.published = true; //changed
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
        // showErrorsStore.set(false);
        // showRunStore.set(false);
    
    }catch(e){
        toast.push(e.message);
    }
}
