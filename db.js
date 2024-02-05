const mongoose =  require("mongoose")

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

mongoose.connect(mongoURL,{
    
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB Server");
})

db.on('error',(err)=>{
    console.log("Error Dectected",err);
})

db.on('disconnected',()=>{
    console.log("MongoDb Disconnected")
})

module.exports =db;

