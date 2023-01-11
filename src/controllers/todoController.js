const todo  = require('../models/todoModel');

const todoGetAll = async (req, res) => {
    const { page } = req.query;
    const limit = 5;
    const skip = Number(page-1)*limit;
    try {
        const todoGetAll = await todo.find({}).limit(limit).skip(skip);
        return res.status(200).json({
            success: true,
            data: todoGetAll
        })
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'Records have been not able to got!'
        })
    }
}

const todoGetById = async (req, res) => {
    const { id } = req.params;
    try {
        const todoGetAll = await todo.findById(id);
        return res.status(200).json({
            success: true,
            data: todoGetAll
        })
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'The record has been not able to got!'
        })
    }
}

const todoAdd = async (req, res) => {
    try {
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

const todoUpdate = async (req, res) => {
    const { id } = req.params;
    try {
        const todoUpdate = await todo.findByIdAndUpdate(id, req.body)
        if(todoUpdate){
            return res.status(200).json({
                success: true,
                message: 'Record has been updated!'
            });
        }
        else{
            return res.status(400).json({
                success: false,
                message: 'Record has been NOT updated!'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Record has been NOT updated! -> Err: '+error
        })
    }
}

const todoDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const todoUpdate = await todo.findByIdAndDelete(id, req.body)
        if(todoUpdate){
            return res.status(200).json({
                success: true,
                message: 'Record has been deleted!'
            });
        }
        else{
            return res.status(400).json({
                success: false,
                message: 'Record has been NOT deleted!'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Record has been NOT deleted! -> Err: '+error
        })
    }
}

module.exports = {
    todoGetAll,
    todoGetById,
    todoAdd,
    todoUpdate,
    todoDelete
}