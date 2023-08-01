<script>
// @ts-nocheck
import {PageNav,PageNavBtn} from '$lib/cmp';
import {showTestStore,showCloneStore,showDeleteStore} from './store';

import save from './fn/save';
$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore

export let item;
</script>

<PageNav>
<PageNavBtn icon={"💾"} title="Save" tf={true} trueColor={"text-white"} 
clk={()=>save(item)}/>

<PageNavBtn icon={"🧪"} title="Test"  tf={false} trueColor={"text-white"}  
 falseColor={"text-gray-600"}
clk={()=>showTestStore.set(!showTest)}  />

<PageNavBtn icon={"🐑"} title="Clone" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}  
clk={()=>showCloneStore.set(!showClone)}
/>

<PageNavBtn icon={"🗑️"} title="Delete" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}   
clk={()=>showDeleteStore.set(!showDelete)}
/>

</PageNav>    
