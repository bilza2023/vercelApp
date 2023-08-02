<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {onMount,toast , Icons} from '$lib/util';
import { Agent } from '$lib/ajax';
import create from './fn/create';
import {templatesStore,showNewDialogueStore} from './store';

$: items = $templatesStore;
$: showNewDialogue = $showNewDialogueStore;

//----------
// let  items;
onMount(async ()=>{
    try {
    // debugger;
        const resp = await Agent.read('test');
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
    <HdgWithIcon icon='📜'>Tests</HdgWithIcon>
    </Centre>
        <ShowIfTrue ifTrue={showNewDialogue} >
          <InputForm  clk={ create }/>
          <!-- <InputForm  clk={()=>{state.showNewDialogue = false} }/> -->
        </ShowIfTrue>
    
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        <!-- New Template -->
        <!-- <div class='w-3/12'> -->
        <CardBtn
                title={'New Test'}
                clk={()=>{ showNewDialogueStore.set(true)}}
                icon="💡"
                bgColor = 'bg-green-900'
                titleCharsCount={15}
        />
        <!-- </div> -->

        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <!-- <div class='w-3/12'> -->
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={`/editTest?quizId=${cardData._id}` }
                icon= { Icons.TEST}
                titleCharsCount={20}
            >
                <!-- card slots -->
                <!-- it has no slots if required this is the place -->
            </Card>
            <!-- </div> -->
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

