<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading , BtnIconOval } from '$lib/cmp';
import {Icons, onMount,toast} from '$lib/util';
import { Agent } from '$lib/ajax';

//----------
let  items;
onMount(async ()=>{
    try {

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
        <div class="flex justify-center gap-2 flex-wrap">

        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class={`w-5/12`}>
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={`/show?quizId=${cardData._id}` }
                icon="📜"
                titleCharsCount={10}
            >
                <!-- card slots -->
                <BtnIconOval icon={Icons.DEL}  />
                <BtnIconOval icon={Icons.BUS} />
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

