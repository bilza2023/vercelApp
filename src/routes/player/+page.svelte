<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
import {browser,onMount,toast,BASE_URL} from '$lib/util'
import { themes ,Presentation} from '$lib/Presentation';
import PlayButtons from './PlayButtons.svelte';
import readSlides from '$lib/tdf/readSlides';
import Slider from './Slider.svelte';
//==newly added stuff
import { Howl } from 'howler';
let  sound;
let  soundFile=null;
let  isPlaying=false;
let  maxSliderValue=0;
let  interval  = null;

async function start(){
try{
// debugger;
  await loadSound();
 if (isPlaying == true){return;}
        sound.play();
        sound.on('play', function () {
        isPlaying = true;
        interval = setInterval(updateTimeDiff,1000);
    });

}catch(e){
  throw new Error("Can not load");
}
    
 return true;     
}

function stop(){ 
    isPlaying = false;
    sound.stop();
    clearInterval(interval);
    pulse = 0; 
    return true;
}
function updateTimeDiff() {
    const r = sound.seek();
    pulse = r;
       setCurrentSlide();
}

async function loadSound(){
sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
        maxSliderValue = sound.duration();
        // console.log("sound loaded..");
    }
    });
}

//============================================================
let slides;
let id;
let tcode;
let theme = themes.basic;
let hydrateInterval=null;
let stopTime = null;

onMount(async ()=>{  
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let val  = await readSlides(id,tcode);
let returnSlides  = await readSlides(id,tcode);
   
 if (returnSlides){
//  debugger;
  slides = returnSlides.slides;
  fixEndTime(slides);
  //fbise_cl_9_ch_1_ex_1.1_q_1_pt_0
  soundFile = 'fbise9math/' +  returnSlides.item.filename + '.mp3';
  getStopTime(slides);
  currentSlide = slides[0];
 }

else {throw new Error('Failed to load');}
// hydrate();
});
async function fixEndTime(slides) {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        if (slide.type== 'Eqs' || slide.type== 'eqs' ) {
        const lastItemEndTime = slide.endTime;
            for (let j = 0; j < slide.items.length; j++) {
                const item = slide.items[j];

                if (j < slide.items.length - 1) {
                    item.extra.endTime = slide.items[j + 1].extra.startTime;
                } else {
                    item.extra.endTime = lastItemEndTime;
                }
            }
        }
    }
}

async function   getStopTime(slides){
 if(slides.length > 0){
    if (slides[slides.length -1].endTime 
    && slides[slides.length -1].endTime > 0 ){
        stopTime = slides[slides.length -1].endTime;
        }else {
        stopTime = 600;
    }
 }
}

// let interval=null;
let pulse=0;
let currentSlide = null;

function setPulse(time){
sound.seek(time);
pulse = time;
// if(pulse > stopTime){stop();return;}
setCurrentSlide();
}
function applyTheme(themeKey){
// debugger;
theme = themes[themeKey];
// console.log(theme);
}


function setCurrentSlide(){
//  debugger;
const r = sound.seek();
 for (let i = 0; i < slides.length; i++) {
 const slide = slides[i];
        if (r >= slide.startTime && r < slide.endTime ){
       currentSlide = slide ;
        return; 
        }
 }
}
</script> 

<div class='bg-gray-800 text-white w-full min-h-screen' style='position: fixed; top: 0;'>

<div class='flex justify-start sticky top-0 w-full p-1 m-0 bg-gray-700'>
<PlayButtons   {start} {stop} callback={applyTheme} />

{#if currentSlide}
<Slider  {slides} {pulse} {setPulse}/>
{/if}

</div>

{#if currentSlide}

    <Presentation {currentSlide} {theme} {pulse} {setPulse}/>
{/if}

</div><!--page wrapper-->