const mongoose=require("mongoose") ;
const orderSchema=new mongoose.Schema({
    user_name: {type:Number,required: true },
    booking_date:{type:String,required: true },
    product_obj:{type:{},required: true },
    quantity : {type:Number,default:1 },
    total_price:{type:Number,require:true},
    product_size : {type:String,default:"5-6Y" },
    address:{type:String,default:"46-D Nagin Nagar,Indore" },
    status:{type:String,default:"Booked" }
},
{versionKey:false});

const orderModal=mongoose.model("order_list",orderSchema) ;
module.exports={orderModal}