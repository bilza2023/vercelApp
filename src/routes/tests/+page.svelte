<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {Icons, onMount,toast} from '$lib/util';
import { Agent } from '$lib/ajax';

//----------
let  items;
onMount(async ()=>{
    try {

        const resp = await Agent.read('test');
        if (resp.ok){
            const data = await resp.json();
            items = data.items;
            console.log("items" , items);
        }else {
            toast.push('failed to load');
        }
    } catch (e) {
    
    }   
});
</script>

<!-- ************** -->
<PageWrapper>
{#if items}
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.TEST}>Tests</HdgWithIcon>
    </Centre>
        
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class='w-3/12'>
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={`/editTest?quizId=${cardData._id}` }
                icon={Icons.TEST}
                titleCharsCount={20}
            >
                <!-- card slots -->
                
                <!-- it has no slots if required this is the place -->
            </Card>
            </div>
        {/each}
        </div>

<br/>
<br/>
{:else}
<Loading />
{/if}
</PageWrapper>

