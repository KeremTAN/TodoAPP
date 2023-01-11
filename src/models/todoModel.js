const mongoose = require('mongoose');
const reportsSchema = new mongoose.Schema({
    daily:{
        type: String,
        required: true,
        trim: true,
    },
    weekly:{
        type: String,
        trim: true,
    },
    mountly:{
        type: String,
        trim: true,
    }
});

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    reports: {
        type: reportsSchema,
        required: true
    },
    complated: {
        type: Boolean,
        default: false
    }
},
{
    collection: "Todo",
    timestamps: true
});

const todo = mongoose.model("Todo", todoSchema);
module.exports = todo;