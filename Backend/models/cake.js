const mongoose = require('mongoose')

const cakeSchema = new mongoose.Schema({
    cakeID: {
        type:Number,
        required:true
    },

    bakerID: {
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

    addedDate:{
        type:Date,
        required:true,
       // default:false
    }
});

module.exports = mongoose.model('Cake', cakeSchema);