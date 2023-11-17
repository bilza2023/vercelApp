//@ts-nocheck

import { BASE_URL,convertEqsToSlide } from "$lib/util";

export default async function readSlides(id,tcode){
 try{
 
  const resp = await fetch( `${BASE_URL}/pre/read`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {id , tcode} )
  });
// 
  if(resp.ok){
    const data = await resp.json();
    //--what if there are no slides ?? error, thought i have tried to make sure that in backend it does not send empty slides
    return data; 
  }else {
    return false;
  }
}catch(e){
    return false;

}

} 