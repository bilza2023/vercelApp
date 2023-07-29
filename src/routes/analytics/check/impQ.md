I have an array of objects "answers". This contain the answer to a MCQ (multiple choice question).

The answer object is in following format:
{
    "id": "ed8f6f7d-046f-430e-a1b6-000d31ea2f66",
    "questionId": "8005255c-fd18-4601-808d-f30796b72d94",
    "totalMarks": 10,
    "multiSelect": true,
    "required": false,
    "payload": "",
    "selectedOptions": [
        "fc8594f6-d12d-4c0e-9a4f-4eba7c16e6de",
        "b41628b2-1fec-4914-9a6d-7d813b93eb0c"
    ],
    "questionType": "SurveyMCQ",
    "_id": "647eb5c2b8bfc0b54c8f8d28",
    "content": "MCQ Multi Select",
    "correctOptions": [
        "fc8594f6-d12d-4c0e-9a4f-4eba7c16e6de",
        "0a151dd6-1b52-4517-8d2d-a66e738baa41",
        "570741d6-cf6f-4015-9f16-a3161c6d09da"
    ]
}

Please note that the answer has an array of option ids in "selectedOptions" and an array of ids in "correctOptions". We have to grade this answer by comparing the selected options with the correct options.

Requirements :
- we have to write a function ("gradeMCQ") to check this answer and give it marks (grade it)
- This answer can be in multiSelect == true or multiSelect == false state.
lets write a seperate function for each state to be called (from the main function "gradeMCQ")  called them "singleSelect" and "multiSelect" functions. 

- To grade when  multiSelect = false; just compare the item 0 or the selected options with item 0 of correct options. if it matches give full marks else give 0.

Now lets write a function for multiSelect. 
for multi select the number of correct options are more than one. and their ids are written in correctOptions. The student has sleelcted id and they are located in selectedOptions. 
Marking needs to be as following:
    - divide the total question marks by the number of correct options (10/correctoptions.length)  (assume question marks = 10). this will give you mark for each correct option.
    - assign marks for each correct option.
    - deduct same amount of marks for selecting a wrong answer. this will prevent the student from clicking all the options.
    - if the student finally gets negative marks just return 0 
