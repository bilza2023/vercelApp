//@ts-nocheck

// import { BASE_URL,convertEqsToSlide } from "$lib/util";
// import {syllabus} from '$lib/data/syllabus.js';

export default async function readSlides(id,tcode){
 try{
   const modulePath = `./${tcode}/${tcode}.js`;
    const { syllabus } = await import(modulePath);

  let data;
  for (let i = 0; i < syllabus.length; i++) {
    const question = syllabus[i];
    if(question._id == id){
      data = question;
    }
  }

  if(data){
    return data; 
  }else {
    return false;
  }
}catch(e){
    return false;

}

} 