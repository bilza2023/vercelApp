<script>
// @ts-nocheck
import {SectionHead,FormRow,Tf,InputElm,InputTextArea} from '$lib/cmp';
import { templateLocalStore,questionsStore } from './store';
$:item = $templateLocalStore;

</script>


{#if item}                          
 <SectionHead  title={item.title}>
    <FormRow title="Quiz Title">
    <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.title} />
    </FormRow>

    <FormRow title="Intro Text">
    <textarea class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
              bind:value={item.introText}></textarea>
    </FormRow>

    <FormRow title="Farewell Text">
    <textarea class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
              bind:value={item.farewellText}></textarea>
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
{/if}            