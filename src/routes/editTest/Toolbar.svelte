<script>

// @ts-nocheck
import {PageNav,PageNavBtn,PageNavLink} from '$lib/cmp';
import {Icons,get} from '$lib/util';
export let item;
import save from './fn/save';
import {showDeleteStore , showRunDlgStore} from './store';
</script>

<PageNav>
<PageNavBtn icon={"💾"} title="Save" tf={true} trueColor={"text-white"} 
    clk={()=>save(item)}
/>

<PageNavBtn icon={Icons.DEL} title="Delete" tf={true} 
trueColor={"text-white"}
clk={()=>showDeleteStore.set(!get(showDeleteStore) )}
/>

<PageNavBtn icon={Icons.RUN} title="Run" tf={true} trueColor={"text-white"} 
clk={()=>showRunDlgStore.set(!get(showRunDlgStore))}
/>
<PageNavLink icon={Icons.CHARTUP} title="Analytics" tf={true} trueColor={"text-white"} 
href={ `/analytics?quizId=${item._id}` }
/>


</PageNav>    
