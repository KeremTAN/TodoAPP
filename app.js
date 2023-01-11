const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
require('./src/configs/databaseConnection')
const port = process.env.PORT || 8000;
const todoRouter = require('./src/routers/todoRouter');
const loginRouter = require('./src/routers/loginRouter');

//middlewares
app.use(express.json()); //middleware func. to proccess req json objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/v1', loginRouter);
app.use('/api/v1', todoRouter);

app.listen(port, () => {
    console.log(`√ -> Server has been initilazed on ${port} port!`);
});