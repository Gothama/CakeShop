const mongoose = require('mongoose')

const cakeSchema = new mongoose.Schema({

    supplierID: {
        type:String,
        required:true
    },

    cakeName: {
        type:String,
        required:true
    },
    ingrediants: {
        type:String,
        required:true
    },
    
    cImageUrl:{
        type:String,
        required:true

    },

    description:{
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },

    addedDate:{
        type:Date,

       default:Date.now
    }
});

module.exports = mongoose.model('Cake', cakeSchema);