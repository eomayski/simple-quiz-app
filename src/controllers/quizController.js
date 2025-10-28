import { Router } from "express";
import quizService from "../services/quizService.js";

const quizController = Router();

quizController.get('/:quizId', async (req, res) => {
    const quizId = req.params.quizId
    
    const quiz = await quizService.getOne(quizId);
    
    res.end();
})

export default quizController;