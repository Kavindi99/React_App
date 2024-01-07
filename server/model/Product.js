//import mongoose
const mongoose = require('mongoose');

//create mongodb db scheme, model using mongoose
//mongoose method eka thula object ekak define kara {} use krla
const ProductModel = mongoose.Schema(
    {
        //define properties

        //id field eka required , number format ekak use krai, unique magin unique karai primary key wage,
        // index managing magin ikmnta data retrive kraganna
        //{} thula configuration yodai
        "id" : {
            require:true,
            type: Number,
            unique :true,
            index : true  //for better performance
        },
        //namak aniwa thiyenna oni eka nisa required true , type eka string
        "name" : {
            require: true,
            type: String
        },
        //price ekk thiyenna oni eknisa required true, type eka decimal unth js waladi number ekak
        "price" : {
            require:true,
            type: Number
        },

        "currency" :{
            require : true,
            // type: Number
            type:String // chANGED TO STRING lkr post man eken yawapu nisa
        },
        "image" : {
            require :true,
            type:String
        }
    },
    //for __v remove
    //oninm  {versionKey:false , --id :false } denna puluwan but eka  nthuwa error ewita eka nthuwa product ekak
    //generate kranna ba kynwa
    {versionKey:false}
    );

const Product = mongoose.model('Product' , ProductModel);

//mongoose walin hadila apu product model eka export karai
module.exports = Product;
