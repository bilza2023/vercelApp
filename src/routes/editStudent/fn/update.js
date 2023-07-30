// @ts-nocheck
import {Agent,get,toast} from '$lib/util';

///////////////////
export default async function update(item){
    try {
    const resp = await Agent.update('student',{ item });

        if (resp.ok){
            // itemStore.set({});
            // item = {};
            toast.push('Student Updated');
        }else {
            const data = await resp.json();
            toast.push( data.message);
        }

    } catch (error) {
        console.log(error);        
    }

}