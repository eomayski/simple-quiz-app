import { Router } from "express";
import quizService from "../services/quizService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const quizzes = await quizService.getAll(); 
    res.render('home', {quizzes});
});

export default homeController;