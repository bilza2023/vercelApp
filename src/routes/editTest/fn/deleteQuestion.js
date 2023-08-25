//@ts-nocheck

export default function deleteQuestion(quiz, id) {
    quiz.questions = quiz.questions.filter(question => question.id !== id);
}