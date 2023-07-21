<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {onMount,toast} from '$lib/util';
import { Agent } from '$lib/ajax';
import create from './fn/create';
import {templatesStore,showNewDialogueStore} from './store';

$: items = $templatesStore;
$: showNewDialogue = $showNewDialogueStore;

//----------
// let  items;
onMount(async ()=>{
    try {

        const resp = await Agent.read('template');
        if (resp.ok){
            const data = await resp.json();
            templatesStore.set(data.items);
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
    <HdgWithIcon icon='📜'>Templates</HdgWithIcon>
    </Centre>
        <ShowIfTrue ifTrue={showNewDialogue} >
          <InputForm  clk={create }/>
          <!-- <InputForm  clk={()=>{state.showNewDialogue = false} }/> -->
        </ShowIfTrue>
    
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        <!-- New Template -->
        <div class='w-3/12'>
        <CardBtn
                title={'New Template'}
                clk={()=>{ showNewDialogueStore.set(true)}}
                icon="💡"
                titleCharsCount={15}
        />
        </div>

        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class='w-3/12'>
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={`/editTemplate?quizId=${cardData._id}` }
                icon="📜"
                titleCharsCount={20}
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

