const express=require("express");
const usersRouter=express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {usersModal}=require("../modal/users.modal")



// /users -- GET/admin ==> To get user data.
usersRouter.get("/",async(req,res)=>{
    try{
    const user_Data=await usersModal.find() ;
    res.send(user_Data)
    }catch(err){
        res.send({"msg":err.message})

    }
})


// /users/:id -- GET/admin ==> To get single user data.
usersRouter.get("/:id",async(req,res)=>{
    const id=req.params.id ;
    try{
    const user_Data=await usersModal.find({_id:id}) ;
    if(user_Data.length>0){
       res.send(user_Data)  
    }else{
        res.send({"msg":"Account is Not Present"})
    }
    }catch(err){
        res.send({"msg":err.message})
    }
})

// /users/:id -- PATCH/admin ==> To update single user data.
usersRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id ;
    try{
    const user_Data=await usersModal.findByIdAndUpdate({_id:id},{...req.body}) ;
     user_Data.save() ;
   res.send({"msg":"User Details Succesfully Updated"}) 
    }catch(err){
        res.send({"msg":err.message})
    }
})

// /users/:id -- DELETE/admin ==> To delete single user data.
usersRouter.delete("/:id",async(req,res)=>{
    const id=req.params.id ;
    try{
    const user_Data=await usersModal.findByIdAndDelete(id) ;
   res.send({"msg":"User Account Succesfully Deleted"}) 
    }catch(err){
        res.send({"msg":err.message})
    }
})


// /users/register -- POST/user  ==> To register a new user.
usersRouter.post("/register",async(req,res)=>{
     const {first_name,last_name,phone_number,date_of_birth,email,password,gender}=req.body ;
     if(first_name && last_name  && phone_number  && date_of_birth  && email  && password){
         try{
   let userdata=await usersModal.find({email:email});
   if(userdata.length==0){
   bcrypt.hash(password, 10, (err, hash)=> {
  const newuser=new usersModal({first_name,last_name,phone_number,date_of_birth,email,password:hash,gender});
  newuser.save();
  res.send({"msg":"User Succesfully Register"})
    });
 }else{
    res.send({"msg":"User is allready present"})
   }
    }catch(err){
res.send({"msg":err.message})
    }  
     }else{
        res.send({"msg":"Plz Provide all form Details"})
     }
 
   })



// /users/login -- POST/user  ==> To login/generate a new token.
usersRouter.post("/login",async(req,res)=>{
 const {email,password}=req.body ;
try{
  let userdata=await usersModal.find({email});
  if(userdata.length>0){
     bcrypt.compare(password,userdata[0].password,(err, result)=> {
    if(result){
     const token= jwt.sign({userId:userdata[0]._id}, "clotheyard");
     res.send({"msg":"Login Succesfully",token:token})
    }else{
       res.send({"msg":"Something Is Wrong"})
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

