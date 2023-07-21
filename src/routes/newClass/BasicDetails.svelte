<script>
// @ts-nocheck
import {SectionHead,FormRow,InputElm,Comment,InputTextArea} from '$lib/cmp';
import {Icons} from '$lib/util';
export let item;
</script>

<SectionHead title='Basic Details' icon={ Icons.PENCIL  } visible={true} >

    <FormRow title='Class Name' >
        <InputElm {item}  value='name'/>
        <Comment>The Class Name must be unique, do not repeat a class name.</Comment>
    </FormRow>
    
    <FormRow title='Description'  >
        <InputTextArea {item}  value='description'/>
        <Comment>This can be edited later.</Comment>
    </FormRow>

</SectionHead>