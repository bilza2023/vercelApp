<script>
// @ts-nocheck
import {SectionHead,FormRow,Tf,InputElm,InputTextArea} from '$lib/cmp';

export let item;
</script>


 <SectionHead  title={item.title}>
                          
    <FormRow title="Quiz Title">
    <InputElm value={item.title} />
    </FormRow>

    <FormRow title="Intro Text">
    <InputTextArea  value={item.introText}/>
    </FormRow>

    <FormRow title="Farewell Text">
    <InputTextArea  value={item.farewellText}/>
    </FormRow>

    <FormRow title="Save Responses">
    <Tf obj={item} bool_prop="saveResponse" />
    </FormRow>

    <FormRow title="Show Intro">
    <Tf obj={item} bool_prop="showIntro" />
    </FormRow>

    <FormRow title="Show Results to user">
    <Tf obj={item} bool_prop="showResult" />
    </FormRow>
            
</SectionHead>