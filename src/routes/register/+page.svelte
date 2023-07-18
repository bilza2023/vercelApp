<script>
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIcon,FormElm,Lbl} from '$lib/cmp';
    import BtnWIconSm from '$lib/cmp/BtnWIconSm.svelte';
    import { Icons } from '$lib/util';
</script>


<PageWrapper>

<br/>
<br/>

<div class='flex justify-center w-full'>
    <div class='w-10/12 '>
        <FormElm>
            <div class='flex justify-center'>
                    <HdgWithIcon icon={Icons.KEY} >Register</HdgWithIcon>
            </div>

            <div class='flex justify-center pt-1 text-white'>
                Email
            </div>


            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    <InputElm value={""} />
                </div>
            </div>
            
            <div class='flex justify-center pt-1 text-white'>
            Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    <InputElm value={""} />
                </div>
            </div>
           
            <div class='flex justify-center pt-1 text-white'>
            Confirm Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    <InputElm value={""} />
                </div>
            </div>


            <div class='flex justify-center'>
            <BtnWIconSm icon={Icons.SAVE} title='Register' />
            </div>
        </FormElm>
    </div>
</div>


</PageWrapper>


