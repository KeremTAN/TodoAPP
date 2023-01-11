const user  = require('../models/loginUserModel');
const jwt   = require('jsonwebtoken');

const todoLogin = async (req, res, next) => {
    const { fullname, nickname, email} = req.body;
    try {
        const _userEmail = await user.findOne({email: email});
        if(_userEmail){
            const token = jwt.sign({
                fullname:   fullname,
                nickname:   nickname,
                email:      email,
                exp:        Math.floor(Date.now()/1000)+120,
                issuer:     'https://github.com/KeremTAN',
            }, 'secretW@rs!');
            res.send(token);
        }
        else{
            const _userNickName = await user.findOne({nickname: nickname});
            if(_userNickName){
                return res.status(400).json({
                    success: false,
                    message: "This nickname was taken!"
                }) 
            }
            else{ 
                const userAdd = new user(req.body);
                await userAdd.save()
                    .then(() => {
                        return res.status(201).json(userAdd);
                    })
                    .catch((err) => {
                        return res.status(400).json({
                            success: false,
                            message: 'An error occurred while creating the record! -> Err: '+err
                        })
                    })
            }
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Recording has been couldn't"
        })
    }
    next();
}

module.exports = {
    todoLogin
}