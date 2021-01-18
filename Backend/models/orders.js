const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    customerID: {
        type:String,
        required:true
    },
    supplierID: {
        type:String,
        required:true
    },
    cakemodelID: {
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    requiredDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    quantity: {
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Orders', ordersSchema);