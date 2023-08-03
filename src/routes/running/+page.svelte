<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading , BtnIconOval } from '$lib/cmp';
import {Icons, onMount,toast,goto} from '$lib/util';
import { Agent } from '$lib/ajax';
import deleteFn from './fn/deleteFn';
//----------
let  items;
onMount(async ()=>{
    try {
        // debugger;
        const resp = await Agent.read('run');
        if (resp.ok){
            const data = await resp.json();
            items = data.items;
            // templatesStore.set(data.items);
            // console.log("items" , items);
        }else {
            toast.push('failed to load');
        }
    } catch (e) {
        toast.push( e.message);
    }   
});
</script>

<!-- ************** -->
<PageWrapper>
{#if items}
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.RUN}>Running</HdgWithIcon>
    </Centre>
    
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap w-full">

        {#each items as item, index}
        <!-- {#each cardsData as item, index} -->
            <div class={'w-3/12'}>
            <!-- <CardTemplate -->
            <Card
                title={item.title}
                url={`/analytics?quizId=${item._id}` }
                icon= {Icons.RUN}
                titleCharsCount={15}
            >
                <!------------ card slots ------------------->
                <BtnIconOval icon={Icons.CHARTUP } clk={()=> goto(`/analytics?quizId=${item._id}` )}  />
                
                <BtnIconOval icon={Icons.ROCKET } clk={()=> goto(`/show?quizId=${item._id}` )}  />

            </Card>
            </div>
        {/each}
        </div>
        <!-- THE MAIN CODE ENDS -->
        

<br/>
<br/>
{:else}
<Loading />
{/if}
</PageWrapper>

