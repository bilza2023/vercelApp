<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {Icons, onMount,toast} from '$lib/util';
import { Agent } from '$lib/ajax';

//----------
let  items;
onMount(async ()=>{
    try {

        const resp = await Agent.read('tag');
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

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<!-- ************** -->
<MainNav/>
<PageWrapper>
{#if items}
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.TAG}>Tags</HdgWithIcon>
    </Centre>
        
        
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class={''}>
            <!-- <CardTemplate -->
            <Card
                title={cardData.name}
                url={`/editTag?quizId=${cardData._id}` }
                icon={Icons.TAG}
                titleCharsCount={10}
            >
                <!-- card slots -->
                <!-- it has no slots if required this is the place -->
            </Card>
            </div>
        {/each}
        </div>
        <!-- THE MAIN CODE ENDS -->
        </Centre>

<br/>
<br/>
{:else}
<Loading />
{/if}
</PageWrapper>

