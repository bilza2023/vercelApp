
import { toast, ajaxPost,BASE_URL } from '$lib/util'


export default async function showPaidContent(tcode){

    const email = localStorage.getItem("teacher_name");
    const resp = await ajaxPost(`${BASE_URL}/auth/ispaid` ,{email,tcode})  
    // console.log('resp',resp);
   if(resp.ok){
    const data = await resp.json();
            if(data.allowed==true){
            // console.log("data.allowed",data.allowed);
            return true;
            }else {
            return false;
            }
  }else {
  // toast.push('failed to authenticate');
    return false;
  }


}