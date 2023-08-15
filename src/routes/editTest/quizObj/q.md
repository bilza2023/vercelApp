i have a svelte app with questionsStore as a store variable.
I am writing a wrapper object around questionsStore variable. 

The questionsStore is an array of objects with question object inside. each question object has a field called id.

This is how i delete an item from questionsStore  
delete (id) {
questionsStore.update(questions => {
const updatedQuestions = questions.filter(question => question.id !== id);
return updatedQuestions;
});
}

I want you to write me a function "getItem"

which will take in "id" and just return the question from with in questionsStore array of objects.
