<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
//  import { onDestroy } from 'svelte';
import {onMount,toast,RESOURCE_URL, ajaxPost,BASE_URL,chqLogin } from '$lib/util'
import { themes ,Presentation} from '$lib/Presentation';

import readSlides from '$lib/data/readSlides';
import { Howl } from 'howler';
import showPaidContent from './fn/showPaidContent';
import Toolbar from './toolbar/Toolbar.svelte';

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
let showContent = false;
let showContentMessage = 'Please note that some of our content is classified as Premium. This exclusive material is available for purchase to enhance your experience on our website.';
let pulse=0;
let state='loading';
let currentSlide = null;


onMount(async ()=>{  
//questionType ['paid', 'login' , 'free'],
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");
////////////////////////
let questionData  = await readSlides(id,tcode);
// console.log('questionData.questionType' , questionData.questionType);
    if(questionData.questionType=='free'){
      showContent = true;  
    }
    if(questionData.questionType=='login'){
      const lg = chqLogin(); 
      if(lg==false){
        showContentMessage = 'Please login to view this content.'
      } else{
       showContent =true;
      }
    }
    if(questionData.questionType=='paid'){
    // debugger;
      showContent =  await showPaidContent(tcode); 
    }

 if (questionData){
  slides = questionData.slides;
  //I can use different tcode (different tables) for the same eq-player. the files should be in static/tcode/exercise/filename.mp3
//  debugger;

   soundFile =  `${RESOURCE_URL}/mp3/${tcode}/${questionData.exercise}/${questionData.filename}.mp3`;
  
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
    // const primarySoundExists = await checkFileExists(soundFile);
    // if(!primarySoundExists){
    //   soundFile = './sounds/music.mp3';
    // }
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

<Toolbar {start} {stop} callback={applyTheme} {pause} {isPlaying} {isPaused} {setVolume} {currentSlide} {slides} {pulse} {setPulse}/>
     
 {#if state=='loading'}
    <h1>loading</h1>
    {/if}

{#if state=='error'}
    <h1>Some Error Occured</h1>
    {/if}

{#if currentSlide && state=='loaded' }
  {#if showContent }
  <div id='displayDiv'>
    <Presentation {currentSlide} {theme} {pulse} {setPulse} {tcode}/>
  </div> 
  {:else}
  <h1>{showContentMessage}</h1>    
  {/if}
{/if}

</div><!--page wrapper-->


<style>
#displayDiv {
  background-color: brown;


}

</style>