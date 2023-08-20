//@ts-nocheck


export default async function stringToArray(content){
 // debugger;
 try{
 const items = await JSON.parse(content);
//  const items = await JSON.parse(items1);
    if (items.length > 0){
        return items;
    }else {
        return [];
    }
 }catch(e){
        return [];
    }
}