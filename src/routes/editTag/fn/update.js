// @ts-nocheck

import {Agent,get,toast} from '$lib/util';
// import {itemStore} from '../store';

export default async function update(item){
    try {
    const resp = await Agent.update('tag',{ item });

        if (resp.ok){
            // itemStore.set({});
            // item = {};
            toast.push('Tag Updated');
        }else {
            const data = await resp.json();
            toast.push( data.message);
        }

    } catch (error) {
        console.log(error);        
    }

}