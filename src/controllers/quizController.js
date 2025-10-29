import { Router } from "express";
import quizService from "../services/quizService.js";
import resultService from "../services/resultService.js";

const quizController = Router();



quizController.get('/:quizId', async (req, res) => {
    let quizId = req.params.quizId

    await resultService.resetAnswers();
    let page = await resultService.resetQuestions();

    quizId = Number(quizId)

    const quiz = await quizService.getOne(quizId);

    quiz.questions.sort(() => Math.random() - 0.5);

    await quizService.updateQuizzes(quiz)

    const question = quiz.questions[0];
    let answers = question.answers

    answers.sort(() => Math.random() - 0.5);

    for (let index = 0; index < answers.length; index++) {

        const labels = ['A.', 'B.', 'C.', 'D.']

        answers[index].label = labels[index]
    }

    res.render('quizzes/questions', { question, answers, quiz, page });
});



quizController.post('/:quizId', async (req, res) => {
    const quizId = Number(req.params.quizId)

    const quiz = await quizService.getOne(quizId);

    let answer = req.body

    if (answer.answer) {
        let [answerValue, answerId] = answer.answer.split("; ")

        let rightAnswer = await quizService.getRightAnswer(quizId, Number(answerId))

        if (answerValue === rightAnswer) {
            resultService.updateAnswers()
        }
    }

    let page = await resultService.updateQuestions();



    let isFinal = false
    if (page === 10) {
        isFinal = true
    }

    const question = quiz.questions[page - 1];
    let answers = question.answers

    answers.sort(() => Math.random() - 0.5);

    for (let index = 0; index < answers.length; index++) {

        const labels = ['A.', 'B.', 'C.', 'D.']

        answers[index].label = labels[index]
    }

    res.render('quizzes/questions', { question, answers, quiz, page, isFinal })
})

quizController.post('/:quizId/results', async (req, res) => {
    const quizId = Number(req.params.quizId)

    const quiz = await quizService.getOne(quizId);

    let answer = req.body

    if (answer.answer) {
        let [answerValue, answerId] = answer.answer.split("; ")

        let rightAnswer = await quizService.getRightAnswer(quizId, Number(answerId))

        if (answerValue === rightAnswer) {
            resultService.updateAnswers()
        }
    }

    const score = await resultService.getAnswers();

    let isSuccess = false;

    if (score > 5) {
        isSuccess = true
    }

    res.render('quizzes/results', {score, isSuccess});
})

export default quizController;