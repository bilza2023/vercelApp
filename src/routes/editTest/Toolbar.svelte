<script>
// @ts-nocheck
import {PageNav,PageNavBtn} from '$lib/cmp';
import {Icons} from '$lib/util';
export let item;
import save from './fn/save';
</script>

<PageNav>
<PageNavBtn icon={"💾"} title="Save" tf={true} trueColor={"text-white"} 
    clk={()=>save(item)}
/>
<PageNavBtn icon={Icons.DEL} title="Delete" tf={true} trueColor={"text-white"} />
<PageNavBtn icon={Icons.RUN} title="Run" tf={true} trueColor={"text-white"} />
<PageNavBtn icon={Icons.CHARTUP} title="Analytics" tf={true} trueColor={"text-white"} />


</PageNav>    
