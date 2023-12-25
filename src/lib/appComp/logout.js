
import {isLoginStore} from '$lib/util/appStore';
import {goto} from '$lib/util';

export default function logout(){
isLoginStore.set(false);
localStorage.removeItem("token");
goto('/login');
}