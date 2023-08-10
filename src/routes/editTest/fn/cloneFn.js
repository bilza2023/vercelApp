// @ts-nocheck
import { Agent,toast} from '$lib/util';
import stringifyContent from './stringifyContent';
import combQnQdeep from './combQnQdeep';

///////////////////////////////////////////////////////

export default async function cloneFn(newTitle) {  
  try{
    // debugger;
  let  item = combQnQdeep();
  item  = await stringifyContent(item);

  const resp = await Agent.create('test' , {title : newTitle});
    //   debugger;
      if (resp.ok) {
      const data  = await resp.json();
      const newItem = data.item;

      item._id = newItem._id;
      item.title = newTitle;
  // newItem.isNew = true;

    const resp2 = await Agent.update('test',{ item });
  
      if (resp2.ok){
        toast.push( "Cloned" );
        showCloneStore.set(false);
        // const data = await resp2.json();
      }else {
        toast.push( "failed to clone" );        
      }

  }else {
    toast.push( "failed to clone" );        
  }

    }catch(e){
    console.log( e );
    }
}