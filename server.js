
const express=require('express');
const app=express();
const cors=require('cors');
const db=require('./db.js');
const dotenv=require('dotenv');

const pizza = require('./models/foodModel')
const pizzaRoute=require('./routes/pizzaRoute');
const UserRoute=require('./routes/UserRoute')
const OrderRoute=require('./routes/OrderRoute')
const userEditRoute=require('./routes/userEditRoute')


app.use(express.json());
app.use(cors());
dotenv.config();
app.use('/getpizza',pizzaRoute);
app.use('/signup',UserRoute);
app.use('/userlogin',UserRoute);
app.use('/payment',OrderRoute);
app.use('/users',UserRoute)
app.use('/delete',UserRoute);
app.use('/e',UserRoute);
app.use('/order',OrderRoute);

const port=process.env.Port


//app.use('/api/pizza/',pizzaRoute);


app.get('/',(req,res)=>{
    res.send("server is running");
})


app.listen(port ,()=>{
    console.log("server is working at ",port)
})
