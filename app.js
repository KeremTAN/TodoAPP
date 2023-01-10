const express = require('express');
const app = express();
require('dotenv').config();
require('./src/configs/databaseConnection')
const port = process.env.PORT || 8000;
const todoRouter = require('./src/routers/todoRouter');

app.use(express.json()); //middleware func. to proccess req json objects
app.use('/api/v1', todoRouter);

app.listen(port, () => {
    console.log(`√ -> Server has been initilazed on ${port} port!`);
});