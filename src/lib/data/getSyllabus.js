//@ts-nocheck

export default async function getSyllabus(tcode){
 try{
  debugger;
   const modulePath = `/${tcode}/${tcode}.js`;
    const { syllabus } = await import(modulePath);

  if(syllabus){
    return syllabus; 
  }else {
    return false;
  }
}catch(e){
    return false;

}

} 