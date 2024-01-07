/*DB Configuration Defined*/
//import mongoose
const mongoose =require('mongoose');

//Access Mongodb url
const dotenv = require('dotenv');

//configure
dotenv.config();

//accessing part
const MONGODB_URL  =process.env.MONGODB_URL ;

//create db const  and add arrow function
const  db = async () => {
    try {
        //using this variable can get mongogo db connected host
        //now asyntronaz method ekk then passes promise type
        // const conn = mongoose.connect(MONGODB_URL);

        //now ok , db changed to async
        //harima thanata enkn await wela inna kyla kyno --> execution eka pose wee
        //await use karanwanm function eka async karannama oni
        const conn = await mongoose.connect(MONGODB_URL);

        //${} --> part of get mongodb connected host
        console.info(`Mongo DB Conncted to : ${conn.connection.host}`)
    } catch (error) {
        console.error("Mongo DB Connect Error :", error);
    }
}

//export dbconnection
module.exports = db;