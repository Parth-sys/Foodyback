const express=require('express');
const router=express.Router();
const pizza=require('../models/foodModel')


router.get('/getallpizza', async (req,res)=>{
try {
   
   const result=await pizza.find({})

    res.send(result)

} catch (error) {
    
    return res.status(400).json({error});
}
});

module.exports =router;