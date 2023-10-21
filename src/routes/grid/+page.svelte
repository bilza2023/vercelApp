<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
import {PageWrapper} from '$lib/cmp';
import {BASE_URL,onMount,toast} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import MainPanel from './MainPanel.svelte';
import SidePanel from './SidePanel.svelte';
// import Sticky from "./Sticky.svelte";

</script>




<PageWrapper>
<MainNav/>


<div class="flex justify-center w-full">
    <MainPanel   />
    <SidePanel   />
</div>


<br>
<br>
<br>
<br>
<br>
</PageWrapper>


