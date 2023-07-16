<script>
// @ts-nocheck
import {PageNav,PageNavBtn} from '$lib/cmp';
import {showTestStore,showCloneStore,showDeleteStore} from './store';

$: showTest = showTestStore;
$: showClone = showCloneStore;
$: showDelete = showDeleteStore


</script>

<PageNav>
<PageNavBtn icon={"💾"} title="Save" tf={true} trueColor={"text-white"} />

<PageNavBtn icon={"🧪"} title="Test"  tf={false} trueColor={"text-white"}  
 falseColor={"text-gray-600"}
clk={()=>showTest.set(true)}  />

<PageNavBtn icon={"🐑"} title="Clone" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}  
/>
<PageNavBtn icon={"🗑️"} title="Delete" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}  
/>

</PageNav>    
