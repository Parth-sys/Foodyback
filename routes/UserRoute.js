const express=require('express');
const router=express.Router();
const User=require('../models/UserModel')


router.post('/users', async (req,res)=>{
    
    const {name,email,password}=req.body;
    const NewUser=new User({name,email,password})
    
    try {
        
         NewUser.save();
       res.send('user registration successful')

    

} catch (error) {
    
    return res.status(400).json({ message:error});
}
});



router.post('/login',async(req,res)=>{

    const {email,password}=req.body;

    const user= await User.find({email,password});
      
    try {

        if(user.length>0){

         const currentUser={
             name:user[0].name,
             email:user[0].email,
             isAdmin:user[0].isAdmin,
             id:user[0]._id
         }
      
          res.send(currentUser);
          console.log(currentUser)
        }
          else{
              res.status(401).json( { message:"error in passowrd or email"})
          }
        
       
    } catch(error) {
        res.send(error)
        
    }

})








router.get('/getallusers', async (req,res)=>{
    try {
       
       const result=await User.find({});
         
        res.send(result)
    
    } catch (error) {
        
        return res.status(400).json({error});
    }
    });


module.exports =router;


router.delete('/:email', async (req,res)=>{
  try{
    const{email}=req.params;
    console.log(email)

    const result= await User.deleteOne({email:email})  
    console.log(result);
     res.status(200).send({message:"user deleted"})
  }
  
  catch(error){
    res.status(400).json(error);
  }

})



  router.patch('/edit/:email',async (req,res)=>{
    try{
      
        const{email}=req.params;


     const {name1,email1,password1}=req.body;


      const result= await User.updateOne({email:email}, {$set :{name:name1 ,email:email1,password:password1}},{upsert:true})  
      console.log(result);
       User.save()
     res.status(200).send({message:"user edit success"})
    }
    
    catch(error){
      res.status(400).json(error);
    }


})
