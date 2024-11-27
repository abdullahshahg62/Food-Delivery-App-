const mongoose = require('mongoose');

// function of database connection
const connectDb = async ()=>{

    try{

    await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongooes successfully running ${mongoose.connect.host}`)
    console.log("mongooes successfully running")
    }
    catch (error){
    console.log("Database is not connect error ",error)
    }
}

module.exports =connectDb