
//@ts-nocheck

export default function moveQuestionDown(quiz, id) {
    const index = quiz.questions.findIndex(question => question.id === id);
    if (index < quiz.questions.length - 1) {
        const temp = quiz.questions[index];
        quiz.questions[index] = quiz.questions[index + 1];
        quiz.questions[index + 1] = temp;
    }
}
