const mongoose = require('mongoose');




const foodSchema = mongoose.Schema({

    name: String,
    varients:[],
    Prices: [],
    Category: { type:String,require}, 
    image:  {type:String,require},
    description:{type: String,require}
},
    {
        timestamps: true

    });

const foodModel =mongoose.model('pizza',foodSchema)
module.exports = foodModel