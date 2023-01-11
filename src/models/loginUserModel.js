const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    }
},
{
    collection: "User",
    timestamps: true
});
    

const user = mongoose.model("User", userSchema);
module.exports = user;