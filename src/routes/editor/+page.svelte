<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,LinkIconOval,Loading} from '$lib/cmp';
import {Agent , Icons, onMount,toast} from '$lib/util';
import SkillEditor from '$lib/skillEditor/SkillEditor.svelte';
//----------
onMount(async ()=>{
    try {

        
    } catch (e) {
        toast.push( e.message);
    }   
});
</script>

<!-- ************** -->
<PageWrapper>
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.BOOKS}>Skill Editor</HdgWithIcon>
    </Centre>
        
        <SkillEditor/>

        <Centre>
        <!-- THE MAIN CODE -->



        <!-- THE MAIN CODE ENDS -->
        </Centre>

<br/>
<br/>
</PageWrapper>

