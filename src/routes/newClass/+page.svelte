<script>
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm,InputTextArea} from '$lib/cmp';
import { Icons} from '$lib/util';
</script>


<PageWrapper>

<br/>
<Centre>
    <HdgWithIcon icon={Icons.STUDENTCAP}>New Class</HdgWithIcon>
</Centre>
<br/>
<div class='mx-10'>
<SectionHead title='Add New Class' icon={ Icons.PENCIL  } visible={true}>

    <FormRow title='Class Name' >
        <InputElm value={3433}/>
        <Comment>Class name must be unique, two classes can not have the same name.You can use numbers and text.</Comment>
    </FormRow>
    
    <FormRow title='Details' >
        <InputTextArea value={'aa'}/>
        <Comment>Add some description for the class.</Comment>
    </FormRow>

</SectionHead>
</div>


    <div class='flex justify-center w-full'>
        <BtnWIconSm icon={Icons.SAVE} title='Save' />
    </div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>
