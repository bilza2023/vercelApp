// @ts-nocheck
import { goto,BASE_URL,toast,ajaxPost} from '$lib/util';
import validateString from "./validateString"
import validateEmail from "./validateEmail"

// updated on 27-jan-2023
export default async function loginFn(email,password){
debugger;
  const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

  const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('password must have 6 to 30 characters');  
      return;
    }

const response = await ajaxPost( `${BASE_URL}/auth/login` , {email,password});

    if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        goto("/");
  } else {
    const data = await response.json();
    if (data.errorcode == 'AccountNotVerified'){
     goto('/verify')
    }
    toast.push(data.message);
  } 
  }

