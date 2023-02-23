const jwt = require('jsonwebtoken');
const Authenticator=(req,res,next)=>{
    const userToken=req.headers.authorization ;
    console.log(userToken)
    if(userToken){
         jwt.verify(userToken,"clotheyard",(err,decoded)=>{
            console.log(decoded,userToken)
            if(decoded){
                req.body.user=decoded.userId ;
                next() ;
            }else{
                res.send({"msg":"Plz Login"})
            }
         });
    }else{
        res.send({"msg":"Plz Login"})
    }

}

module.exports={Authenticator}