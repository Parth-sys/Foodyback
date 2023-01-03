
// connection to mongodb

const mongoose=require('mongoose');

var mongourl="mongodb+srv://Parth:Parthsarthi@cluster0.yjbfn.mongodb.net/foody" 
   // var mongourl= "mongodb+srv://Parth:Parthsarthi@cluster0.yjbfn.mongodb.net/foody?retryWrites=true&w=majority"

    mongoose.connect(mongourl,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log("mongodb connected");
})

db.on('error',()=>{
    console.log('mongodb connection fail')
})

module.exports=mongoose;