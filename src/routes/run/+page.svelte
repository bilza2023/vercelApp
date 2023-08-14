<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardOnly,CardBtn,InputForm,ShowIfTrue,Loading , LinkIconOval , BtnIconOval } from '$lib/cmp';
import {Icons, onMount,toast,goto} from '$lib/util';
import { Agent } from '$lib/ajax';
import getItems from './fn/getItems';
import deleteFn from './fn/deleteFn';
//----------
import {itemsStore} from './store';
$: items = $itemsStore;

onMount(async ()=>{
    try {
    // debugger;
    const returnItems = await getItems();
    if (returnItems){
        itemsStore.set(returnItems);
    }else {
        toast.push('failed to load');
    }

    } catch (e) {
        toast.push( e.message);
    }   
});
import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<!-- ************** -->
<MainNav/>
<PageWrapper>
{#if items}
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.RUN}>Test Runs</HdgWithIcon>
    </Centre>
    
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap w-full">

        {#each items as item, index}
        <!-- {#each cardsData as item, index} -->
            <div class={'w-3/12'}>
            <!-- <CardTemplate -->
            <CardOnly
                title={item.title}
                url={`/analytics?quizId=${item._id}` }
                icon= {Icons.RUN}
                titleCharsCount={15}
            >
                <!------------ card slots ------------------->
                <BtnIconOval icon={Icons.DEL } clk={()=>deleteFn(item._id)}  />
                <LinkIconOval icon={Icons.CHARTUP } href={`/analytics?quizId=${item._id}`}  />
                
                <LinkIconOval icon={Icons.ROCKET } href={`/show?quizId=${item._id}`}  />

            </CardOnly>
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

