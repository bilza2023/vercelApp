//@ts-nocheck


export default async function quizStringifiedQsToArray(quiz){
        for (let i = 0; i < quiz.questions.length; i++) {
            quiz.questions[i].content  = await stringToArray(quiz.questions[i].content);
        }
return quiz;
}
//This function return a vlaid Array or [].Every content of a question is an array of objects.
async function stringToArray(content){
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