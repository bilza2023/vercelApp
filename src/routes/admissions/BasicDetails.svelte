<script>
// @ts-nocheck
import {SectionHead,FormRow,InputElm,Comment} from '$lib/cmp';
import {Icons} from '$lib/util';
export let item;
</script>

<SectionHead title='Basic Details' icon={ Icons.PENCIL  } visible={true} >

    <FormRow title='Registeration Number' >
        <InputElm {item}  value='id'/>
       
        <Comment>You can add any Numerical value as registeration number as long as it is a valid number and it is unique among all the students. No two students can have the same registeration number. No symbols, chracters are allowed just numbers.</Comment>
    </FormRow>
    
    <FormRow title='Name'  >
        <InputElm {item}  value='name'/>
        <Comment>This can be edited later..</Comment>
    </FormRow>

</SectionHead>