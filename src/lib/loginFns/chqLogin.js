
import {isLoginStore,accountPaidStore} from '$lib/util';

/**
 - This is just a temp arrangement later we add encrypted cookies
 This is where we check the login, we can change it here the strategy (cookies etc etc) and for rest of the app it will be changed.
 // --loiginFn , logoutfn and chqLogin all 3 work like hand in glove
*/

export default function chqLogin(){
const token = localStorage.getItem('token');
const accountPaid = localStorage.getItem('accountTypePaid');
 
      if (! token){
        isLoginStore.set(false);
      }else {
        isLoginStore.set(true);
      return true;                  
      }
      //=============================
      if (! accountPaid){
        accountPaidStore.set(false);
      }else { //only being present does not mean the accountType is paid
        if (accountPaid == true){
        accountPaidStore.set(true);
        }else {
        accountPaidStore.set(false);
        }
      return true;                  
      }


}