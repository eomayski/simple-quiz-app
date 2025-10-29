import fs from "fs/promises";
import result from "../models/Result.js";


export default {
    async getAnswers(){
        return await result.result.correctAnswers
    },

    async getQuestions(){
        return await result.result.questionsCount
    },

    async updateAnswers() {
        result.result.correctAnswers++
        

        const dbSerialized = JSON.stringify(result);

        await fs.writeFile('./src/result.json', dbSerialized);

        return result.result.correctAnswers;
    },

    async resetAnswers() {
        result.result.correctAnswers = 0
        

        const dbSerialized = JSON.stringify(result);

        await fs.writeFile('./src/result.json', dbSerialized);

        return result.result.correctAnswers;
    },

    async updateQuestions() {
        result.result.questionsCount++;

        const dbSerialized = JSON.stringify(result);

        await fs.writeFile('./src/result.json', dbSerialized);

        return result.result.questionsCount;
    },

    async resetQuestions() {
        result.result.questionsCount = 1

        const dbSerialized = JSON.stringify(result);

        await fs.writeFile('./src/result.json', dbSerialized);

        return result.result.questionsCount;
    }
}