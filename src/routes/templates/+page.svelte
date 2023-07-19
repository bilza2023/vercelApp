<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue} from '$lib/cmp';
import {onMount,toast} from '$lib/util';
import {templatesStore} from '../../lib/cmn/appStore';
$: templates = $templatesStore;

  const cardsData = [
    { title: 'Titlex', url: 'https://google.com' },
    { title: 'The Title2w', url: 'https://google.com' },
    { title: 'The Title32', url: 'https://google.com' },
    { title: 'The Title48', url: 'https://google.com' },
    { title: 'The Title52', url: 'https://google.com' },
    { title: 'The Title6', url: 'https://google.com' },
    { title: 'The Title7', url: 'https://google.com' },
    { title: 'The Title8', url: 'https://google.com' },
    { title: 'The Title9', url: 'https://google.com' },
    { title: 'The Title10', url: 'https://google.com' },
    { title: 'The Title11', url: 'https://google.com' },
    { title: 'The Title12', url: 'https://google.com' },
    { title: 'The Title13', url: 'https://google.com' },
    { title: 'The Title14', url: 'https://google.com' },
    { title: 'The Title15', url: 'https://google.com' }
  ];
  const state = {
      showNewDialogue : false
  }
//----------
onMount(async ()=>{
    try {
    //   toast.push("ok");
    } catch (e) {
    
    }   
});
</script>

<!-- ************** -->
<PageWrapper>
<br/>
    <Centre>
    <HdgWithIcon icon='📜'>Templates</HdgWithIcon>
    </Centre>
        <ShowIfTrue ifTrue={state.showNewDialogue} >
          <InputForm  clk={()=>{state.showNewDialogue = false} }/>
        </ShowIfTrue>
    
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        <!-- New Template -->
        <div class={`w-5/12`}>
        <CardBtn
                title={'New Template'}
                clk={()=>{state.showNewDialogue = !state.showNewDialogue}}
                icon="💡"
                titleCharsCount={15}
        />
        </div>

        {#each templates as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <div class={`w-5/12`}>
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={'/editTemplate'}
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
</PageWrapper>

