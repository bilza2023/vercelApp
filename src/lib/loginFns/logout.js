
import {isLoginStore} from '$lib/util/appStore';
import {goto} from '$lib/util';

export default function logout(){
    isLoginStore.set(false);
    accountPaidStore.set(false);

    localStorage.removeItem("token");
    localStorage.removeItem("accountTypePaid");
     
goto('/login');
}