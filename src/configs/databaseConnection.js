const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_PATH,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('√ -> Database connection is successfuly!');
}).catch(() => {
    console.log('X -> Database connection is NOT successfuly!');
});
