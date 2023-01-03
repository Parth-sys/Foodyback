const express=require('express');
const router=express.Router();
const Useredit=require('../models/usereditModel')






router.patch('/edit/:email',async (req,res)=>{
    try{
      
        const{email}=req.params;


     const {name1,email1,password1}=req.body;


      const result= await Useredit.updateOne({email:email}, {$set :{name:name1 ,email:email1,password:password1}},{upsert:true})  
      console.log(result);
     
     res.status(200).send({message:"user edit success"})
    }
    
    catch(error){
      res.status(400).json(error);
    }


})

module.exports =router;