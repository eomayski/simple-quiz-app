import express, { urlencoded } from "express";


const app = express();

app.use(urlencoded());

app.get('/', (req, res) => {
    res.send('Its Working', { 'Content-Type': 'text/html; charset=utf-8' })

    res.end();
})

app.listen(3000, () => console.log("Server is listening on http://localhost:3000..."));