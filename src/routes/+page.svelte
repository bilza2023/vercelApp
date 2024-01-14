<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import MathCard from '$lib/homePage/MathCard.svelte';
import {Icons} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';

// let board  = "FBISE";
// let cls  = "Class 9th";

// function setBoard(brd){
// board = brd;
// board = board;
// }
// function setClass(incomming){
// cls = incomming;
// cls = cls;
// }


</script>

<MainNav/>
<PageWrapper>
<!-- <Test /> -->
<!-- <a href="/graph/index.html">Graph</a> -->

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}> Your Online Home Tutor</HdgWithIcon>
    </Centre>


<Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-1   p-2 m-2'>
<BooksImages tcode='fbise8math' />
<BooksImages tcode='fbise9math' />
<BooksImages tcode='fbise9english' />
<BooksImages tcode='fbise10math' />
<BooksImages tcode='experimental' />
</div>

<div class="flex w-full justify-between ">
<div>
<!-- <BoardButton checkWith ="FBISE" {board} {setBoard}/> -->
<!-- <BoardButton checkWith ="KPK Board" {board} {setBoard}/> -->
</div>

<div>
<!-- <BoardButton checkWith ="Class 8th" board={cls} setBoard={setClass}/> -->
<!-- <BoardButton checkWith ="Class 9th" board={cls} setBoard={setClass}/> -->
<!-- <BoardButton checkWith ="Class 10th" board={cls} setBoard={setClass}/> -->
</div>


</div>

</div>
</Centre>

<br/>
<div class='flex justify-start m-2 p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Math Example Questions</HdgWithIcon>
</div>

<div class='flex justify-center flex-wrap gap-2 bg-gray-900 p-8 m-8 mt-1 rounded-md border-2 border-white'>

    <MathCard id="653113340a6eaa163e9f89d0" details="Ex 1.1 Q 1" />  
    <MathCard id="653113350a6eaa163e9f89d6" details="Ex 1.1 Q 2" />  
    <MathCard id="653113350a6eaa163e9f89dc" details="Ex 1.1 Q 3" />  

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
