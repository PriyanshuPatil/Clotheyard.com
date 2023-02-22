const express=require("express");
const usersRouter=express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {usersModal}=require("../modal/users.modal")
usersRouter.get("/",async(req,res)=>{
    try{
    const user_Data=await usersModal.find() ;
    res.send(user_Data)
    }catch(err){
        res.send({"msg":err.message})
    }
})

usersRouter.post("/register",async(req,res)=>{
     const {name,email,password,gender,age,city}=req.body ;
    try{
   let userdata=await usersModal.find({email:email});
   if(userdata.length==0){
   bcrypt.hash(password, 10, (err, hash)=> {
  const newuser=new usersModal({name,email,password:hash,gender,age,email});
  newuser.save();
  res.send({"msg":"User Succesfully Register"})
    });
 }else{
    res.send({"msg":"User is allready present"})
   }
    }catch(err){
res.send({"msg":err.message})
    }
   })


usersRouter.post("/login",async(req,res)=>{
 const {email,password}=req.body ;
try{
  let userdata=await usersModal.find({email});

  if(userdata.length>0){
      bcrypt.compare(password,userdata[0].password,(err, result)=> {
    if(result){
     const token= jwt.sign({userId:userdata[0]._id}, "clotheyard");
     res.send({"msg":"Login Succesfully",token:token})
    } 
});
 
}else{
   res.send({"msg":"wrong Credential"})
  }
   }catch(err){
res.send({"msg":err.message})
   }
  
})

module.exports={usersRouter} ;


// /users/register ==> To register a new user.
// /users/login ==> For logging in generating a token

let data=
{
    "name" : "ayush1",
    "email": "ayush1@gmail.com",
    "gender" : "male",
    "password": "ayush",
    "age" :22,
    "city" : "indore" 
}