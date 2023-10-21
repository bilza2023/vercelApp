//@ts-nocheck
import {runningTime,startTime,interval,isPlayingStore} from "./store.js";
import {get} from "$lib/util";

function start(){
  isPlayingStore.set(true);
  interval.set(setInterval(updateTimeDiff,1000));  
  startTime.set(Date.now());  
}

function stop(){ 
    isPlayingStore.set(false);
    clearInterval(get(interval));
    runningTime.set(0);
}
function updateTimeDiff() {
    const currentTime = Date.now();
    const timeDiff = currentTime - get(startTime);
    runningTime.set(Math.floor(timeDiff / 1000));
}

export {start,stop,updateTimeDiff}