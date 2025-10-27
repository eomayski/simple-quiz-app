import { Router } from "express";
import homeController from "./controllers/homeController.js";

const routes = Router();

routes.use(homeController);

routes.get(`/*splat`, (req, res) => {
    res.send('Not found', { 'Content-Type': 'text/html; charset=utf-8' });
})
export default routes;