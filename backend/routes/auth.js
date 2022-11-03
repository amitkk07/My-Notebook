const express=require('express');
const router=express.Router();
const User=require('../models/User');
const{body,validationResult}=require('express-validator');
 const bcrypt=require("bcryptjs");
const { JsonWebTokenError } = require('jsonwebtoken');
 var jwt=require('jsonwebtoken');
 const JWT_SECRET="AmitisgoingtoqualifyCSEwithrank01";
// Route(1):create a User using:POST"/api/auth/createuser".No login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password',"Password must be of 5 characters").isLength({min:5}),
], async (req,res)=>{
    //if there are  errors,returns  Bad request and the errors 
     const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    // check whether the user with this email exists already
    try{
    let user= await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    const salt= await bcrypt.genSalt(10);
    secPass= await bcrypt.hash(req.body.password, salt)
     user=await  User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass,
    })
    
//     .then(user=>res.json(user))
//     .catch(err=>{console.log(err)
//     res.json({error:"Please enter a unique value for email",message:err.message})});
      const data={
        user:{
            id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      res.json({authToken});
    //   console.log(jwtData);  
    // res.json(user);
    }catch(error){
        console.error(error.message);
        res.status(500).send("internal server error");
    }

})
//Route(2):authenticate a User using:POST"/api/auth/login".No login required
router.post('/login',[
      body('email','Enter a valid Email').isEmail(),
      body('password','Password can not be blank').exists(),
    ], async (req,res)=>{
    //if there are  errors,returns  Bad request and the errors 
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    try {
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const passwordCompare= await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const data={
            user:{
                id:user.id
            }
          }
          const authToken=jwt.sign(data,JWT_SECRET);
          res.json({authToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error ");
    }
});
//Route(3):Get loggedin User Details using:POST"/api/auth/getuser". login required
router.post('/getuser', async (req,res)=>{
try {
    userId="todo";
    const user=await User.findById(userId).select("-password");
} catch (error) { 
    console.error(error.message);
    res.status(500).send("internal server error ");
    }
});
module.exports=router;