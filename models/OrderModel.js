const mongoose =require('mongoose');


const Orderschema=mongoose.Schema({

   name:{type:String,require},
    email:{type:String,require},
    userid:{type:String,require},
    OrderItems:[],
    shippingAddress:{type:Object},
    orderAmount:{type:Number,require},
    isDeliverd:{type:Boolean,require,default:false},
    transactionId:{type:String,require}
},
    {
        timestamps:true
    }
)

const OrderHistory=mongoose.model('Orderhistory',Orderschema);
module.exports=OrderHistory;