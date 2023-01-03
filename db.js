
// connection to mongodb

const mongoose=require('mongoose');

var mongourl=process.env.url
   

    mongoose.connect(mongourl,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log("mongodb connected");
})

db.on('error',()=>{
    console.log('mongodb connection fail')
})

module.exports=mongoose;