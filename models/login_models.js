const mongoose = require('mongoose');

//Login in page implmentation
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

//event page implementation
const eventSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    Equipment:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Event', eventSchema);