// @ts-nocheck

import {Agent,get,toast} from '$lib/util';
import {itemStore} from '../store';

export default async function save(){
    try {
    // console.log("itemStore" , get(itemStore));
    // debugger;
    const resp = await Agent.create('tag',{item : get(itemStore)});

        if (resp.ok){
            itemStore.set({});
            toast.push('Tag saved');
        }else {
            const data = await resp.json();
            toast.push( data.message);
        }

    } catch (error) {
            toast.push( 'Unknown Error');
    }

}