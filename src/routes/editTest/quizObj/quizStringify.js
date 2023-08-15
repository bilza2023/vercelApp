//@ts-nocheck


export default async function quizStringify (item){
 
 for (let i = 0; i < item.questions.length; i++) {
    item.questions[i].content = JSON.stringify(item.questions[i].content);
  }
//  item.questions = questions;
 return item;

}