const mongoose=require("mongoose") ;
const productSchema=mongoose.Schema({
    title : String ,
    body : String ,
    device : String ,
    no_if_comments : Number
},
{versionKey:false});

const productModal=mongoose.model("product",productSchema);
module.exports={productModal}