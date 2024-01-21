<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
//  import { onDestroy } from 'svelte';
import {onMount,toast} from '$lib/util'
import { themes ,Presentation} from '$lib/Presentation';
import PlayButtons from './PlayButtons.svelte';
import readSlides from '$lib/data/readSlides';
import Slider from './Slider.svelte';
import { Howl } from 'howler';
let  sound;
let  soundFile=null;
let  isPlaying=false;
let  maxSliderValue=0;
let  interval  = null;

let slides;
let id;
let tcode;
let theme = themes.basic;
let stopTime = null;
let isPaused = false;

let pulse=0;
let state='loading';
let currentSlide = null;


onMount(async ()=>{  
// debugger;
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let returnSlides  = await readSlides(id,tcode);
   
 if (returnSlides){
//  debugger;
  slides = returnSlides.slides;
  //I can use different tcode (different tables) for the same eq-player. the files should be in static/tcode/exercise/filename.mp3
  soundFile =  '/' + tcode + '/' + returnSlides.exercise  + '/' + returnSlides.filename + '.mp3';
  fixEndTime(slides); ///check why i need this?
  getStopTime(slides);
  currentSlide = slides[0];
         await loadSound();
         state='loaded';
 }
else {throw new Error('Failed to load');}
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
async function checkFileExists(file) {
  try {
    const response = await fetch(file);
    return response.ok;
  } catch (error) {
    console.error('Error checking file existence:', error);
    return false;
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
function setVolume(volumeLevel) {
  sound.volume(volumeLevel);
}
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
async function start(){
try{
// debugger;
 if (isPlaying == true){return;}
 if (isPaused == true){pause();return;}
//   await loadSound();
        sound.play();
        sound.on('play', function () {
        isPlaying = true;
        interval = setInterval(updateTimeDiff,500);
    });

}catch(e){
  state = 'error';
  throw new Error("Can not load");
}
    
 return true;     
}
function pause() {
if (isPaused) {
    sound.play();
} else {
    sound.pause();
}
isPaused = !isPaused;
}
function stop(){ 
    isPlaying = false;
    isPaused = false; // imp
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
async function loadSound() {
  try {
  // debugger;
    const primarySoundExists = await checkFileExists(soundFile);
    if(!primarySoundExists){
      soundFile = './sounds/music.mp3';
    }
    sound = new Howl({
      src: [soundFile],
      volume: 1.0,
      html5: true,
      onload: function () {
        maxSliderValue = sound.duration();
        console.log("sound loaded..");
      },
      onloaderror: function (id, error) {
        // console.error("Error loading sound:", error);
        state = 'error';
      },
    });
  } catch (e) {
    toast.push('failed to load sound');
  }
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
<PlayButtons   {start} {stop} callback={applyTheme} {pause} {isPlaying} {isPaused} {setVolume}/>

{#if currentSlide}
<Slider  {slides} {pulse} {setPulse}/>
{/if}

</div>

 {#if state=='loading'}
    <h1>loading</h1>
    {/if}

{#if state=='error'}
    <h1>Some Error Occured</h1>
    {/if}

{#if currentSlide && state=='loaded' }
  <!-- <div>{bufferPercentage}</div> -->
    <Presentation {currentSlide} {theme} {pulse} {setPulse} {tcode}/>
{/if}

</div><!--page wrapper-->