


//@ts-nocheck
export default function moveQuestionUp(quiz, id) {
    const index = quiz.questions.findIndex(question => question.id === id);
    if (index > 0) {
        const temp = quiz.questions[index];
        quiz.questions[index] = quiz.questions[index - 1];
        quiz.questions[index - 1] = temp;
    }
}
