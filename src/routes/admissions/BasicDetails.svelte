<script>
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment} from '$lib/cmp';
import {Icons} from '$lib/util';
</script>

<SectionHead title='Basic Details' icon={ Icons.PENCIL  }>

    <FormRow title='Registeration Number' >
        <NumberElm value={3433}/>
        <Comment>You can add any Numerical value as registeration number as long as it is a valid number and it is unique among all the students. No two students can have the same registeration number. No symbols, chracters are allowed just numbers.</Comment>
    </FormRow>
    
    <FormRow title='Name' >
        <InputElm value={'aa'}/>
        <Comment>This can be edited later..</Comment>
    </FormRow>

</SectionHead>