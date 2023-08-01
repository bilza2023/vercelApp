check this svelte component. some of the CardBtn Components are smaller than other I want all the same size

here is CardBtn.svelte

<script>
//@ts-nocheck
export let icon="📜";
export let title='The Title';
export let clk = ()=>true;
export let titleCharsCount = 20;
//------------------
function firstXChars(string) {
  return string.slice(0, titleCharsCount);
}

</script>

 
<div class="w-full bg-gray-600 rounded-md p-2 m-1 
border-4  border-blue-700 text-center 
hover:border-blue-200"><!--outer -div-->

<button  class="  rounded-lg" 
 on:click={clk} >

<div class="flex flex-col" ><!--inner -div-->
    <!-- //icon -->
    <div class="mb-2"><span class="text-4xl">{icon}</span></div>
   <!-- title -->
   <div class="p-1 m-1 bg-gray-700 text-sm rounded-md">{firstXChars(title)}</div>
   <!-- buttons -->
   
   <div class='flex justify-center m-0 p-0'>
   <slot ></slot>
      <hr/>
   </div>
   
</div><!--inner-div-->
</button>
</div><!--outer-div-->


here is page.svelte
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
        <div class='min-w-128'>
        <CardBtn
                title={'New Template'}
                clk={()=>{ showNewDialogueStore.set(true)}}
                icon="💡"
                titleCharsCount={15}
        />
        </div>

        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class='min-w-64'>
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={`/editTemplate?quizId=${cardData._id}` }
                icon="📜"
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

