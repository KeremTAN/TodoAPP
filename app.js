// includes libs
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
require('./src/configs/databaseConnection')
const port = process.env.PORT || 8081;

const todoRouter = require('./src/routers/todoRouter');
const loginRouter = require('./src/routers/loginUserRouter');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Extended: https://swagger.io/specification/#infoobject
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: "Todo API",
            description: "Todo API Information",
            contact: {
                name: "Kerem TAN"
            },
            servers: ['https://localhost:8081']
        }
    },
    apis: ['./src/routers/loginUserRouter.js']
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


//middlewares
app.use(express.json()); //middleware func. to proccess req json objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1', loginRouter);
app.use('/api/v1', todoRouter);

app.listen(port, () => {
    console.log(`√ -> Server has been initilazed on ${port} port!`);
});