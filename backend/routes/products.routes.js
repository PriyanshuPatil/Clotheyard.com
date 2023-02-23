const express=require("express");
const productRouter=express.Router();
const {productModal}=require("../modal/products.modal")
productRouter.get("/",async(req,res)=>{
    const {user}=req.body ;
    const quaries=req.query ;
  
 try{
const  productdata=await productModal.find({user}) ;    
res.send(productdata)
}catch(err){
    res.send({"msg":err.message})
}

})

productRouter.patch("/:update",async(req,res)=>{
    const params=req.params.update;
 try{
let productdata=await productModal.findByIdAndUpdate({_id:params},req.body) ;
productdata.save() ;
res.send({"msg":"Succesfully Updated"})
}catch(err){
    res.send({"msg":err.message})
}

})
productRouter.post("/",async(req,res)=>{
 try{
let productdata=new productModal(req.body) ;
productdata.save() ;
res.send({"msg":"Succesfully added"})
}catch(err){
    res.send({"msg":err.message})
}

})
productRouter.delete("/:id",async(req,res)=>{
    const params=req.params.id;
 try{
let productdata=await productModal.findByIdAndDelete(params) ;
productdata.save() ;
res.send({"msg":"Succesfully delited"})
}catch(err){
    res.send({"msg":err.message})
}

})
module.exports={productRouter} ;


