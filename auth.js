const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secretW@rs!');
        next();
    } catch (error) {
        console.log(error);
        if(error.name=='TokenExpiredError'){
            return res.status(401).send({
                message: 'Your token has expired!',
                status: -1
            });
        }
        else if(error.name=='JsonWebTokenError'){
            return res.status(401).send({
                message: 'Your token or signature is invalid!',
                status: -1
            });
        }
        else {
            return res.status(401).send({
                message: 'Unauthorized Access! Stay back, please!',
                status: -1
            });
        }
    }
}