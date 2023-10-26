<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm , BtnWIcon,FormElm,Lbl} from '$lib/cmp';
import { Icons,onMount } from '$lib/util';
import Presentation from './Presentation.svelte';
import MainNav from '$lib/appComp/MainNav.svelte';


</script>

<PageWrapper>
<MainNav />

<div class='flex justify-center w-full'>
<HdgWithIcon icon={Icons.BOOKS}>Presentation</HdgWithIcon>
</div>

<Presentation  />




</PageWrapper>