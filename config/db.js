require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;


exports.connectToDb = ()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((conn)=>{
        console.log(`connected to db: ${conn.connection.host}`);
    })
    .catch(err=>{
        console.log(err.message);
    })
}
