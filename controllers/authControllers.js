const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require('bcrypt');

//@desc Login the user
//@route POST /auth/login
//@access public

const loginUser = asyncHandler( async (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  await User.findOne({ email: email})
  .then( async(user)=>{
    const val = await bcrypt.compare(password,user.password);
    if(val){
      res.status(200).send(user);
    }
    else{
      res.status(401).send({ message:"Invalid password"});
    }
  })
  .catch( (e)=>{
    res.status(404).send({message:"User not found"});
  });
})



//@desc Register the user
//@route POST /auth/register
//@access public

const registerUser = asyncHandler( async (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  await User.findOne({ email: email})
    .then( async(user)=>{
      if(user === null){
      const hashedPassword = await bcrypt.hash(password,10);
      const user = await User.create({ email: email,password: hashedPassword});
      res.status(200).send(user); 
      }
      else{
        res.status(400).send({message:"User already registered"});
      }
      
    })
    .catch(async(e)=> {
      res.status(500).send({message:"Error on server side"})
    })

});


module.exports = {loginUser, registerUser};