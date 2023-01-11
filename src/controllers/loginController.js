const jwt   = require('jsonwebtoken');

const todoLogin = async (req, res, next) => {
    const { fullname, nickname, email} = req.body;
    const token = jwt.sign({
        fullname:   fullname,
        nickname:   nickname,
        email:      email,
        exp:        Math.floor(Date.now()/1000)+120,
        issuer:     'https://github.com/KeremTAN',
    }, 'secretW@rs!')
    res.send(token);
    next();
}

module.exports = {
    todoLogin
}