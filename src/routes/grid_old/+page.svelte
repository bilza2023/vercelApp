<script>
import {PageWrapper} from '$lib/cmp';
import {BASE_URL,onMount,toast} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import Sticky from "./Sticky.svelte";
import { Howl } from 'howler';
import SidePanel from './sp/SidePanel.svelte';
import MainPanel from './MainPanel/MainPanel.svelte';

import getTableData from "./demo";

let gridData = { rows: [] };
let startTime = null;
let runningTime = null;
let  questionDetails = "xyz";
let eqs = [];
let soundFile;
let sound;
let PresentationTotalTime =0; 
/////////////////////////
let interval;
let maxSliderValue; //it is not timeDiff since it does not change
let isPlaying=false;
let timeDiff = 0; // Initialize timeDiff - keep timeDiff and not use sound.see

function changeSeek(newSeekValue){
 sound.seek(newSeekValue);
}

function start(){
    // debugger;
    if (isPlaying == true){return;}
    isPlaying = true;
    sound.play();
        sound.on('play', function () {
        interval = setInterval(updateTimeDiff,1000);
        });
    
}

function stop(){
    sound.stop();
    isPlaying = false;
    timeDiff = 0;
    clearInterval(interval);
    window.scrollTo({top: 0,behavior: 'smooth'});
    setFocus();
}

function updateTimeDiff() {
// debugger;
const currentTime = Date.now();
const timeDiff = currentTime - startTime;
// Calculate runningTime if needed, for example, in seconds:
runningTime = Math.floor(timeDiff / 1000);
}

onMount(async () => {
    gridData = await getTableData();
    startTime = Date.now();
    interval = setInterval(updateTimeDiff, 1000);
});


</script>


<PageWrapper>
<MainNav/>

<div class='p-1 m-0 text-xs bg-gray-800 text-yellow-600'>
{questionDetails}</div>

    <Sticky {start} {stop} {timeDiff} {changeSeek} maxSliderValue={maxSliderValue}/>


<div class="flex justify-center w-full">
<MainPanel {gridData}  {soundFile} {runningTime}   />
<SidePanel  {eqs} />
</div>

 
</PageWrapper>

