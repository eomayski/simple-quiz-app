import express, { urlencoded } from "express";
import handlebars from 'express-handlebars';

import routes from "./routes.js";

const app = express();

//Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', 'src/views');


//Setup static middleware
app.use(express.static('src/public'));

app.use(urlencoded());

// app.get('/', (req, res) => {
//     res.send('Its Working', { 'Content-Type': 'text/html; charset=utf-8' })

//     res.end();
// })

app.use(routes)

app.listen(3000, () => console.log("Server is listening on http://localhost:3000..."));