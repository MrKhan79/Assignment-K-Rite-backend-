require('dotenv').config()
const { default: mongoose } = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 3000
require('dotenv').config();
const { MongoClient } = require('mongodb');


mongoose.set('strictQuery', false)

const connectToDb = async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`connected to db: ${conn.connection.host}`);
    }
    catch(error){
        console.log(error.message);
        process.exit(1)
    }
}


connectToDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`running on port ${PORT}`)
    })
});

