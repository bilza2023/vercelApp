//@ts-nocheck


export default async function questionContentStringify(questions){
  for (let i = 0; i < questions.length; i++) {
    questions[i].content = JSON.stringify(questions[i].content);
  }
  return questions;
}
