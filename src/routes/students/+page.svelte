<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading , LinkIconOval } from '$lib/cmp';
import {Icons, onMount,toast} from '$lib/util';
import { Agent } from '$lib/ajax';

//----------
let  items;
onMount(async ()=>{
    try {
        // debugger;
        const resp = await Agent.read('student');
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

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- ************** -->
<PageWrapper>
{#if items}
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.STUDENT}>Students</HdgWithIcon>
    </Centre>
        
        
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">

          <!-- <div class={`w-5/12`}> -->
          <Card
                title= 'New'
                url= '/admissions'
                icon={Icons.BULB}
                titleCharsCount={10}
            >
                 <!-- card slots -->
                <!-- it has no slots if required this is the place -->
                <LinkIconOval icon={Icons.BULB } href= '/admissions'  />
            </Card>
        <!-- </div> -->

        {#each items as item, index}
        <!-- {#each cardsData as item, index} -->
            <!-- <div class={`w-5/12`}> -->
            <!-- <CardTemplate -->
            <Card
                title={item.name}
                url={`/resultStudent?quizId=${item._id}` }
                icon={Icons.STUDENT}
                titleCharsCount={10}
            >
                <!-- card slots -->
                
                <LinkIconOval icon={Icons.WRENCH } href={`/editStudent?quizId=${item._id}`}  />

                <LinkIconOval icon={Icons.CHARTUP } href={`/resultStudent?quizId=${item._id}`}  />

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

