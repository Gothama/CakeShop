const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    supplierID: {
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
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
   
    password:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model('Supplier', supplierSchema);