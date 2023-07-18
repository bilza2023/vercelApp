<script>
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm} from '$lib/cmp';
import { Icons} from '$lib/util';
import AdditionalDetails from './AdditionalDetails.svelte';
    import BasicDetails from './BasicDetails.svelte';
</script>

<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.STUDENTCAP}>Admissions</HdgWithIcon>
    </Centre>
    <br/>

    <div class='mx-10'>
        <BasicDetails />
    </div>

    <br/>

    <div class='mx-10'>
        <AdditionalDetails />
    </div>

    <br/>

    <div class='flex justify-center w-full'>
        <BtnWIconSm icon={Icons.SAVE} title='Save' />
    </div>



</PageWrapper>
