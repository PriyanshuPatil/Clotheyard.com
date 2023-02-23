const mongoose=require("mongoose") ;
const usersSchema=mongoose.Schema({
    first_name : {type:String,required: true },
    last_name : {type:String,required: true },
    phone_number: {type:Number,required: true },
    date_of_birth: {type:String,required: true },
    email: {type:String,required: true },
    password: {type:String,required: true },
    gender : {type:String,required: true,default:"Male" }
},
{versionKey:false});

const usersModal=mongoose.model("user",usersSchema) ;
module.exports={usersModal}