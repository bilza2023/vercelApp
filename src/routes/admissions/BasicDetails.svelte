<script>
// @ts-nocheck
import {SectionHead,FormRow,InputElm,Comment} from '$lib/cmp';
import ClassesDd from "../../lib/appComp/ClassesDD.svelte";
import {Icons} from '$lib/util';
export let item;
</script>

{#if item}
<SectionHead title='Basic Details' icon={ Icons.PENCIL  } visible={true} >

    <FormRow title='Registeration Number' >
        <InputElm {item}  value='id'/>
       
        <Comment>You can add any Numerical value as registeration number as long as it is a valid number and it is unique among all the students. No two students can have the same registeration number. No symbols, chracters are allowed just numbers.</Comment>
    </FormRow>
    
    <FormRow title='Name'  >
        <InputElm {item}  value='name'/>
        <Comment>This can be edited later..</Comment>
    </FormRow>
    
    <FormRow title='Password'  >
        <InputElm {item}  value='password'/>
        <Comment>Create a new Password for the student.</Comment>
    </FormRow>
    
    <FormRow title='Class'  >
            <br />
              <ClassesDd {item}/>
            <br />
        <Comment>Assign the student a class. It can be changed any time and will not effect the tests taken already by Student.</Comment>
    </FormRow>

</SectionHead>
{/if}