const {connection}=require("./db");
 const {productRouter} =require("./routes/products.routes") ;
 const {usersRouter} =require("./routes/users.routes");
// const {Authenticator}=require("./middleware/authentication.middleware")
const express=require("express") ;
const cors=require("cors")
require("dotenv").config()
const app=express();


// middleware
app.use(cors())
app.use(express.json());


//routes
app.get("/",(req,res)=>{
res.send("Home-Page")
})
app.use("/users",usersRouter)
app.use("/product",productRouter)
// app.use(Authenticator)




//port information
app.listen(process.env.port,async()=>{
try{
    await connection ;
    console.log("connected to DB")
}catch(err){
    console.log(err.message)
}
console.log(`application running at ${process.env.port}`)
})