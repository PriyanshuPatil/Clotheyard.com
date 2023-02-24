const express=require("express");
const productRouter=express.Router();
const {productModal}=require("../modal/products.modal") ;

// /product -- GET/user ==> To get product data.
productRouter.get("/",async(req,res)=>{
   // const category=req.params ;
    // type,page,limit,sort,order
 try{
const  productdata=await productModal.find() ;    
res.send(productdata)
}catch(err){
    res.send({"msg":err.message})
}

})



// /product/:id -- GET/user ==> To get single product data.

productRouter.get("/:id",async(req,res)=>{
    const id=req.params.id ;
 try{
const  productdata=await productModal.find({_id:id}) ;    
res.send(productdata)
}catch(err){
    res.send({"msg":err.message})
}

})


/*
/product/:id -- PATCH/admin ==> To update data.
*/

productRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id;
 try{
let productdata=await productModal.findByIdAndUpdate({_id:id},req.body) ;
productdata.save() ;
res.send({"msg":"Product Succesfully Updated"})
}catch(err){
    res.send({"msg":err.message})
}
})

/*
 /product -- POST/admin ==> To add new product data.
*/

productRouter.post("/",async(req,res)=>{
 try{
 const newuser=new productModal(req.body);
  newuser.save();
res.send({"msg":"Product Succesfully added"})
}catch(err){
    res.send({"msg":err.message})
}

})

// /product/:id -- DELETE/admin ==> To delete single product data.

productRouter.delete("/:id",async(req,res)=>{
    const id=req.params.id;
 try{
let productdata=await productModal.findByIdAndDelete(id) ;
res.send({"msg":"Product Succesfully delited"})
}catch(err){
    res.send({"msg":err.message})
}

})
module.exports={productRouter} ;


