// @ts-nocheck
import {isLoginStore , isAdminStore, goto,BASE_URL,toast} from '$lib/util';
import validateString from "./validateString"
import validateEmail from "./validateEmail"

export default async function signupFn(email,password,password2){
// debugger;
    if (password !== password2){
          toast.push('Passwords does not match');  
      return;
    }
  const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }

const response = await fetch( `${BASE_URL}/auth/signup` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 000`,
      },
      body: JSON.stringify( {email,password} )
    });

  if (response.ok) {
      // const data = await response.json();
      goto("/verify");
      // toast.push(data.message);    
  } else {
      isLoginStore.set(false);
      isAdminStore.set(false);
      const data = await response.json();
      toast.push(data.message);
  } 
  }

