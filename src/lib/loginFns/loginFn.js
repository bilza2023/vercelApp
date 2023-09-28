// @ts-nocheck
import {isLoginStore,accountPaidStore,BASE_URL,toast,goto } from '$lib/util';
import validateString from "../../routes/login/validateString"
import validateEmail from "../../routes/login/validateEmail"
///////////////////////////////////////////
export default async function loginFn(email,password){
//  debugger;
const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
}
///////////////////////////////////////////
const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }

const response = await fetch( `${BASE_URL}/login` ,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify( {email,password} )
  });
    if (response.ok) {
        const data = await response.json();
          
          if (data.accountType &&  data.accountType == 'paid'){
            localStorage.setItem("accountTypePaid", true);
            accountPaidStore.set(true);
          } else {
            localStorage.setItem("accountTypePaid", false);
            accountPaidStore.set(false);
          }
          
          if(data.token){
            localStorage.setItem("token", data.token);
            isLoginStore.set(true);
          }
        goto("/");
  } else {
    // const data = await response.json();
    isLoginStore.set(false);
    accountPaidStore.set(false);
    toast.push('login failed');
  } 
  }

