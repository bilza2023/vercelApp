
I have a svelte App and i am using a svelte store variable called "itemStore"

import { writable } from 'svelte/store';

export const itemStore     = writable( {} );

you may know to edit svelte store variables we have to use "set" and "update"

like this
questionsStore.update(questions => {
  const mcq= getDataMCQ();
  const newQuestions = [... questions , mcq];
        return newQuestions;
    });

Requirement:

1. I want to write a simple javascript object called "EditQuizObj" which will be a wrapper around the svelte store "itemStore" variable. 
2. it should have methods
            - set : a wrapper around svelte store variable set method
            - update : --same as above---
            