const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID: {
        type:String,
        required:true
    },
    userName: {
        type:String,
        required:true
    },
    telephoneNum: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    password:{
        type:String,
        required:true,
       // default:false
    }
});

module.exports = mongoose.model('User', userSchema);