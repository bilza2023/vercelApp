i have page.svelte which has item.question


i have questions.svelte which has an array of questions with each question.content a stringified array.

in onMount we parse the  arrays 
onMount(async ()=>{
    // debugger;
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        question.content = stringToArray(question.content);
    }
});

