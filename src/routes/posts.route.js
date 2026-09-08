const express = require('express')
const jwt  = require("jsonwebtoken");
const router = express.Router();

router.post("/create",(req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
    }catch(err){
        return res.status(401).json({
            message:"Token is invalid"
        })
    }
})


module.exports = router