<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,Range,Card,BtnIconOval} from '$lib/cmp';
import {onMount,toast} from '$lib/util';

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
    <HdgWithIcon>Tests</HdgWithIcon>
    </Centre>
    
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
        {#each cardsData as cardData, index}
            <div class={`w-3/12`}>
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={cardData.url}
                icon="🧪"
                titleCharsCount={15}
            >
                <!-- card slots -->
                <BtnIconOval  on:click={() => true}  />
                <BtnIconOval icon='📈'  on:click={() => true}  />
            </Card>
            </div>
        {/each}
        </div>
        <!-- THE MAIN CODE ENDS -->
        </Centre>

<br/>
<br/>
</PageWrapper>

