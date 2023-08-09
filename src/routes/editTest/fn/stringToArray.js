//@ts-nocheck


export default function stringToArray(content){
 // debugger;
 try{
 const items = JSON.parse(content);
    if (items.length > 0){
        return items;
    }else {
        return [];
    }
 }catch(e){
        return [];
    }
}