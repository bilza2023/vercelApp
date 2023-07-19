import {isLoginStore} from '$lib/cmn/appStore';

export default function logout(){
isLoginStore.set(false);
localStorage.setItem("token", '');

}