const mongoose=require('mongoose');

const UsereditSchema=mongoose.Schema({
    name:{type:String ,require},
    email:{type:String,require },
    password:{type:String,require },
    


},
{
    timestamps:true
}
)
module.exports=mongoose.model('newuser',UsereditSchema)
