//@ts-nocheck
import {toast,Agent} from '$lib/util';

export default async function save(item) {
    try {
        debugger;

        item.classId = '';
        //--This is no longer required since the question.content are not strigified now
        // item = await quizStringify(item);

        const resp = await Agent.update('test', { item });

        if (resp.ok) {
            const data = await resp.json();
            toast.push("saved");
        } else {
            const data = await resp.json();
            toast.push(data.message);
        }

    } catch (e) {
        toast.push('Failed to save');
    }
    }