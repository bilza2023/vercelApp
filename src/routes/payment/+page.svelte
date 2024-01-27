<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import MathCard from '$lib/homePage/MathCard.svelte';
import {Icons} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';
import PaymentOptions from "./PaymentOptions.svelte";


</script>

<MainNav/>
<PageWrapper>

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}>Payment</HdgWithIcon>
    </Centre>

<PaymentOptions />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>
