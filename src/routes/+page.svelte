<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import MathCard from '$lib/homePage/MathCard.svelte';
import {Icons} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import BoardButton from '$lib/homePage/BoardButton.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';

import {Test} from 'taleemutil';

let board  = "FBISE";
let cls  = "Class 9th";

function setBoard(brd){
board = brd;
board = board;
}
function setClass(incomming){
cls = incomming;
cls = cls;
}


</script>

<MainNav/>
<PageWrapper>
<!-- <Test /> -->
<!-- <a href="/graph/index.html">Graph</a> -->

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>taleem.help</HdgWithIcon>
    </Centre>
    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}>Your Online Home Tutor</HdgWithIcon>
    </Centre>

<Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-1   p-2 m-2'>
<BooksImages {board} {cls} />
</div>

<div class="flex w-full justify-between ">
<div>
<BoardButton checkWith ="FBISE" {board} {setBoard}/>
<BoardButton checkWith ="KPK Board" {board} {setBoard}/>
</div>

<div>
<BoardButton checkWith ="Class 8th" board={cls} setBoard={setClass}/>
<BoardButton checkWith ="Class 9th" board={cls} setBoard={setClass}/>
<BoardButton checkWith ="Class 10th" board={cls} setBoard={setClass}/>
</div>


</div>

</div>
</Centre>

<br/>
<div class='flex justify-start m-2 p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Math Example Questions</HdgWithIcon>
</div>

<div class='flex justify-center flex-wrap gap-2 bg-gray-900 p-8 m-8 mt-1 rounded-md border-2 border-white'>

    <MathCard id="65241cc094cd0f67ca0aa1b5" details="Ex 4.4 Q 1 P 1" board="FBISE" className="9th"  />  
    <MathCard id="65241cc294cd0f67ca0aa1ba" details="Ex 4.4 Q 1 P 2" board="FBISE" className="9th"  />  
    <MathCard id="65241cc694cd0f67ca0aa1bf" details="Ex 4.4 Q 1 P 3" board="FBISE" className="9th"  />  
    <MathCard id="65241cca94cd0f67ca0aa1c4" details="Ex 4.4 Q 1 P 4" board="FBISE" className="9th"  />  

    <!-- <MathCard id="650b94ddd750929738a45366" details="Ex 1.5 Q 4 Pt 1" board="FBISE" className="9th"  />   -->

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
