const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    customerID: {
        type:String,
        required:true
    },
    bakerID: {
        type:String,
        required:true
    },
    cakeID: {
        type:Number,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
       // default:false
    }
});

module.exports = mongoose.model('Orders', ordersSchema);