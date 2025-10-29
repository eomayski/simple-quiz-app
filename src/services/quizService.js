import data from "../models/Quiz.js";
import fs from "fs/promises"

export default {
    async getAll() {
        const result = await data.quizzes.slice();
        return result;
    }
        ,
    async getOne(quizId) {
        const result = await data.quizzes.find(quiz => quiz.id === quizId);
        return result;
    },

    async getRightAnswer(quizId, questionId) {
        const index = await data.quizzes.findIndex(quiz => quiz.id === quizId);
        const question = await data.quizzes[index].questions.find(question => question.id === questionId)
        return question.correctAnswer
    },

    async updateQuizzes(newQuiz) {
        const index = data.quizzes.findIndex(quiz => quiz.id === newQuiz.id);

        data.quizzes[index] = newQuiz
        
        const dbSerialized = JSON.stringify(data);
        
        await fs.writeFile('./src/data.json', dbSerialized);
        
        return data;
    }
}
