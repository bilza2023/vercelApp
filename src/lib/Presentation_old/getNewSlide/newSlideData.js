//4-nov-2024
//@ts-nocheck
/***
- No data from Presentation and Ample data from component internal.2
- DO NOT USE GLOBALS FROM PRESENTATION / ENGINE TO SLIDES 
- dont use callbacks in comps since they are just display items.its not an app its presentation.
 */
// import { uuid } from "$lib/util";
export default function newSlideData( type) {
// fsStartTime:null and  fsEndTime:null are in items and not in side
return {
    startTime:0,
    endTime:10,
    type, // this is "slideType" , its what is used by Presentation Module
    version:'0.0.0',
    items: [], 
    slideExtra:[],
    template:'',
};




}