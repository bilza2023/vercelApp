//@ts-nocheck
import { get } from '$lib/util';
import { pageStateStore } from '../store';

///////////////////////////////////////////////////
export default function nextPageState ( ){
  let quiz = get( pageStateStore  ); 
  // pageState == '' is only at start after resp.ok
  if ( quiz  == '' ) {
      if (quiz.private == true){
          pageStateStore.set('loginForm');
        return;
      }else {
          pageStateStore.set('showQuiz');
        return;
      }    
  }
///////////////////////////////////////////
  if ( quiz  == 'showQuiz' ) { 
      if (quiz.showResult == true){
          pageStateStore.set('result');
        return;
      }else {
          pageStateStore.set('goodbye');
        return;
      }    
  }
  
///////////////////////////////////////////|
}//                                        | 
///////////////////////////////////////////|
