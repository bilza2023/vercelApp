<script>
// @ts-nocheck
import {PageNav,PageNavBtn} from '$lib/cmp';
import {Icons,get} from '$lib/util';
import save from './fn/save';


import {showCloneStore,showDeleteStore,showRunDlgStore} from './store';
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore
$: showRunDlg = $showRunDlgStore


export let item;
</script>

<PageNav>

<PageNavBtn icon={Icons.SAVE } title="Save" tf={true} trueColor={"text-white"} 
clk={()=>save(item)}
 />

<PageNavBtn icon={Icons.RUN} title="Run" tf={true} trueColor={"text-white"} 
clk={()=>showRunDlgStore.set(!showRunDlg)}
 />

<PageNavBtn icon={"🐑"} title="Clone" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}  
clk={()=>showCloneStore.set(!showClone)}
 />

<PageNavBtn icon={"🗑️"} title="Delete" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}   
clk={()=>showDeleteStore.set(!showDelete)}
 />

</PageNav>    
