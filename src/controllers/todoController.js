const todo = require('../models/todoModel');


const todoGetAll = async (req, res) => {
    try {
        const todoGetAll = await todo.find({});
        return res.status(200).json({
            success: true,
            data: todoGetAll
        })
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'Records has been not able to got!'
        })
    }
}
const todoAdd = async (req, res) => {
    try {
        console.log(req.body);
        const todoAdd = new todo(req.body);
        await todoAdd.save()
                    .then(() => {
                        return res.status(201).json(todoAdd)
                    })
                    .catch((err) => {
                        return res.status(400).json({
                            success: false,
                            message: 'An error occurred while creating the record! -> Err: '+err
                        })
                    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Recording has been couldn't"
        })
    }
}

module.exports = {
    todoAdd,
    todoGetAll
}