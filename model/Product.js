const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,   
    },
    stock:{
        type:Number
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
      type:mongoose.Schema.ObjectId,
      ref:'User'  
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = {Product};