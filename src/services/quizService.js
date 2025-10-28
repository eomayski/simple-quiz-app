import data from "../models/Quiz.js";

export default {
    async getAll() {
        const result = await data.quizzes.slice();
        return result;
    }
        ,
    async getOne(quizId) {
        const result = await data.quizzes.find(quiz => quiz.id === quizId);
        return result;
    }
}
