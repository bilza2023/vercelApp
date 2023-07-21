<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputEmail,InputElm,NumberElm,Comment,InputTextArea} from '$lib/cmp';
import {Icons} from '$lib/util';

export let item;
</script>

    <br/>    
    <SectionHead title='Additional Details' icon={Icons.FILESBOX}>

        <FormRow title='Age' >
            <NumberElm value={0}/>
            <Comment>Age group of the student.</Comment>
        </FormRow>
        
        <FormRow title='Email' >
            <InputEmail {item} value={'email'}/>
            <Comment>Please provide a valid email address, it may be used for communication.</Comment>
        </FormRow>

          <FormRow title='Description' >
            <InputTextArea {item} value={'description'}/>
            <Comment>You can add any information here but keep in mind that it can be edited or deleted later on.</Comment>
        </FormRow>

    </SectionHead>