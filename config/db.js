const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = process.env.DB_URL;

const client = new MongoClient(uri);

exports.client.connectToDb = ()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((conn)=>{
        console.log(`connected to db: ${conn.connection.name}`);
    })
    .catch(err=>{
        console.log(err.message);
    })
}
