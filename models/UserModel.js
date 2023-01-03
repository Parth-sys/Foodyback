const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{type:String ,require},
    email:{type:String,require },
    password:{type:String,require },
    

     isAdmin:{type:Boolean ,require,default:false}

},
{
    timestamps:true
}
)
module.exports=mongoose.model('users',UserSchema)
