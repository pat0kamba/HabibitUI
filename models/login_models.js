const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);