const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerID: {
        type:String,
        required:true,
        unique:true
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
        unique:true
    },
    name:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Customer', customerSchema);