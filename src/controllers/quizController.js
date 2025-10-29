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

    console.log(answers);
   
    res.render('quizzes/questions', {question, answers, quiz, page});
})

quizController.post('/:quizId', async (req, res) => {
    const quizId = Number(req.params.quizId)
    let answer = req.body

    let [answerValue, answerId] = answer.answer.split("; ")

    let rightAnswer = await quizService.getRightAnswer(quizId, Number(answerId))

    if (answerValue === rightAnswer) {
        resultService.updateAnswers()
    }
    
    

    res.end()
})

export default quizController;