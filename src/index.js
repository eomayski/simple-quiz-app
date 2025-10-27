import express, { urlencoded } from "express";
import routes from "./routes.js";


const app = express();

app.use(urlencoded());

app.get('/', (req, res) => {
    res.send('Its Working', { 'Content-Type': 'text/html; charset=utf-8' })

    res.end();
})

app.unsubscribe(routes)

app.listen(3000, () => console.log("Server is listening on http://localhost:3000..."));