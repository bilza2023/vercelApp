<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,LinkIconOval,Loading} from '$lib/cmp';
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
import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/> 
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
        <div class={`w-5/12`}>
          <Card
                title= 'Create New Class'
                url= '/newClass'
                icon={Icons.BULB}
                titleCharsCount={10}
            >
                 <!-- card slots -->
                <!-- it has no slots if required this is the place -->
                <LinkIconOval icon={Icons.BULB } href= '/newClass'  />
            </Card>
        </div>


        {#each items as item, index}
        <!-- {#each cardsData as item, index} -->
            <div class={`w-5/12`}>
            <!-- <CardTemplate -->
            <Card
                title={item.name}
                url={`/resultClass?quizId=${item._id}` }
                icon={Icons.TEAM}
                titleCharsCount={10}
            >
                 <!-- card slots -->
                <!-- it has no slots if required this is the place -->
                
                <LinkIconOval icon={Icons.WRENCH } href={`/editClass?quizId=${item._id}`}  />

                <LinkIconOval icon={Icons.CHARTUP } href={`/resultClass?quizId=${item._id}`}  />
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

