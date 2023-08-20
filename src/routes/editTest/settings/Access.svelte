<script>
//@ts-nocheck
import {BtnWIconXs,FormRow} from '$lib/cmp';
import {Icons} from '$lib/util';
import ClassesDd from "$lib/appComp/ClassesDD.svelte";
import {itemStore} from '../store';
export let item;

function setAccess(access){
        itemStore.update(item => {
        item.private = access;
        return item;
    });
    console.log("item.private" , item.private);
}
// debugger;
let btnColorPrivate;
let btnColorPublic;

$: btnColorPublic = $itemStore.private ? 'bg-blue-800' : 'bg-red-800';
$: btnColorPrivate = $itemStore.private ? 'bg-red-800' : 'bg-blue-800';
</script>

<div>

    <div class={`flex justify-center w-full bg-gray-700 m-1 p-1 rounded-md    
    `}>
        <BtnWIconXs icon={Icons.TEAM}
        bgColor = {btnColorPublic}
        clk={()=>setAccess(false)}
        >
        Public</BtnWIconXs>
        
        <BtnWIconXs icon={Icons.KEY}
        bgColor = {btnColorPrivate}
        clk={()=>setAccess(true)} >
        Private</BtnWIconXs>
    </div>
    {#if item.private}
        <FormRow title='Class'>
            <ClassesDd {item}/>
        </FormRow>
    {/if}
</div>       