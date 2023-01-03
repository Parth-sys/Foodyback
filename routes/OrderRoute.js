const express=require('express');
const { nanoid } = require('nanoid');
const router=express.Router();
const stripe=require('stripe')("sk_test_51KxQ2RSCCd96m68Db00e2bQZbDJiVLAJwemtK8DxY5Wgjjen0ZHDV3O1yrky4tgzBr8K97nT3NsIytk92mEXn9eC00AKPnl00W");
const Order=require('../models/OrderModel');

//router.post('/order', async(req,res)=>{

    /*
    try {
        
        const payment=await stripe.charges.create({
            amount:subTotal*100,
            currency:"inr",                         //creating payment
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:nanoid()
        }
        
        )
    })
    */
   
   
   
   
   
   const YOUR_DOMAIN = 'http://localhost:5000';
   
   router.post('/order', async (req, res) => {


       
    
    const {token,subTotal,currentUser,CartItem}=req.body;
    console.log(token,subTotal,CartItem,currentUser)

    //console.log(currentuser)

       if(currentUser==Null){
        res.json({message:"Please Log In.."})
       }



    
    try{
       const customer=await stripe.customers.create({
           email:token.email,                             // creating cutomer 
           source:token.id
        })

        const paymentIntent = await stripe.paymentIntents.create({
            amount: subTotal*100,
            currency: "inr",
            payment_method: 'pm_card_visa',
            automatic_payment_methods: {
              enabled: true,
            },
            
        });
        
        
        
        if(paymentIntent){
            
            const order=new Order({
                name:currentUser.name,
                email:token.email,
                OrderItems:CartItem,
                orderAmount:subTotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip
                },
                transactionId:customer.source
            })
            console.log(token.id)
            
            res.send({
              clientSecret: paymentIntent.client_secret,
            });
            order.save();
            res.send("Order Placed ")
            
                   // console.log(paymentIntent)
                }

                else{
                    res.send("Failed to place order")
                }

                
            } catch (error) {
                console.log(error)
                res.send("something went wrong")
            }
        
        
    });
    

router.post('/orders',async(req,res)=>{

    const {email}=req.body;
    try {
        const orderH=await Order.find({email:email}).sort({_id:-1});
        console.log(orderH)
        res.send(orderH);
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }

})




module.exports=router;