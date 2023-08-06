<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,Range,Card,BtnIconOval} from '$lib/cmp';
import {onMount,Icons} from '$lib/util';

  const cardsData = [
    //-once user is logged in this is his home page
    { title: 'Students', url: '/students' ,icon :'👨‍🎓'},
    { title: 'Add Student', url: '/admissions',icon :'👨‍🎓' },
    // { title: 'Add Tag', url: '/newTag' ,icon :'🏷️'},

    { title: 'Classes', url: '/classes' ,icon :'🧑‍🤝‍🧑'},
    { title: 'Add Class', url: '/newClass' ,icon :'🧑‍🤝‍🧑'},
    // { title: 'Tags', url: '/tags' ,icon :'🏷️'},
    
    // { title: 'Template', url: '/templates' ,icon :'📜'},
    { title: 'Tests', url: '/tests' ,icon :'🧪'},
    { title: 'Running', url: '/running' , icon:'🏃‍♂️' }
    
    // { title: 'Dashboard', url: '/dashboard' ,icon :'📺'},


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
            <div class={`w-5/12`}>
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

