<script>
// @ts-nocheck
import {SectionHead,FormRow,InputElm,Comment} from '$lib/cmp';
import ClassesDd from "../../lib/appComp/ClassesDD.svelte";
import {Icons} from '$lib/util';
export let item;
</script>

<SectionHead title='Basic Details' icon={ Icons.PENCIL  } visible={true} >
    
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