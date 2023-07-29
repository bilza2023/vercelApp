<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {Agent , Icons, onMount,toast} from '$lib/util';

//----------
let  items;
onMount(async ()=>{
    try {

        const resp = await Agent.read('class');
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
    <HdgWithIcon icon={Icons.TEAM}>Classes</HdgWithIcon>
    </Centre>
        
        
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class={`w-5/12`}>
            <!-- <CardTemplate -->
            <Card
                title={cardData.name}
                url={`/editStudent?quizId=${cardData._id}` }
                icon={Icons.TEAM}
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

