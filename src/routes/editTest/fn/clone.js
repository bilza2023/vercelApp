//@ts-nocheck
import {toast,Agent} from '$lib/util';
import {visibleDialogStore} from '../store';

//////////////////////////////////
export default async function clone(item , title) {
try {
    // debugger;
    const resp = await Agent.create('test', { title });
    if (resp.ok) {
        const data = await resp.json();
        const newItem = data.item;
        item._id = newItem._id;
        item.title = title;
        item.classId = ''; //dont save classId
        //--here stringify
        // item = await quizStringify(item);

        const resp2 = await Agent.update('test', { item });

        if (resp2.ok) {
            toast.push("Cloned");
            visibleDialogStore.set('');
        } else {
            toast.push("failed to clone");
        }
    } else {
        toast.push("failed to clone");
    }
        } catch (e) {
            console.log(e);
        }
    }