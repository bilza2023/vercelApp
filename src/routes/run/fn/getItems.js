//@ts-nocheck

import { Agent } from '$lib/ajax';
/////////////////////////////////////////////

export default async function getItems(){
    try {
        // debugger;
        const resp = await Agent.read('run');
        if (resp.ok){
            const data = await resp.json();
            return data.items;
        }else {
            return null;
        }
    } catch (e) {
        return null
    }   
}