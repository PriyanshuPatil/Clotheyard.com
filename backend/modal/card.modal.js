const mongoose=require("mongoose") ;
const cardSchema=new mongoose.Schema({
    quantity : {type:Number,default:1 },
    size : {type:String,default:"5-6Y" },
    userId: {type:Number,required: true },
    product_obj:{type:{},required: true }
 
},
{versionKey:false});

const cardModal=mongoose.model("card_item",cardSchema) ;
module.exports={cardModal}