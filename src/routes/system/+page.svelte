<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,Range,Card,BtnIconOval} from '$lib/cmp';
import {onMount,toast} from '$lib/util';

  const cardsData = [
    { title: 'Dashboard', url: '/dashboard' ,icon :'📺'},
    { title: 'Admissions', url: '/admissions',icon :'🗃️' },
    { title: 'New Class', url: '/' ,icon :'🎓'},
    { title: 'Students', url: '' ,icon :'👨‍🎓'},
    { title: 'Classes', url: '' ,icon :'🧑‍🤝‍🧑'},
    { title: 'Tags', url: '' ,icon :'🏷️'},
    { title: 'Template', url: '' ,icon :'📜'},
    { title: 'Tests', url: '' ,icon :'🧪'},
    { title: 'Running', url: '' , icon:'🏃‍♂️' },


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
    <HdgWithIcon icon='🔧'>System</HdgWithIcon>
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
                icon= {cardData.icon}
                titleCharsCount={15}
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

