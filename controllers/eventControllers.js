const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const User = require('../models/userModel');

//@desc Create a new event
//@route POST /event/create
//@access private

const createEvent = asyncHandler( async(req,res) => {
  if(!req.body.userid || !req.body.name){
    res.status(400).send({message : 'All details are required'});
  }
  else{
    await Event.create({parent_user:req.body.userid, name:req.body.name});
    res.status(200).send({message : 'Event created successfully'});
  }
});

//@desc Register to a new event
//@route POST /event/register
//@access private

const registerEvent = asyncHandler( async(req, res) => {
  if(!req.body.useremail || !req.body.eventname){
    res.status(400).send({message : 'All details are required'});
  }
  else{
    const event = await Event.findOne({name:req.body.eventname});
    const user = await User.findOne({email:req.body.useremail});
   
    if(event['reg_users'].includes( user._id ) ){
      res.status(400).send({message:'User already registered'});
    }
    else{
      await Event.findByIdAndUpdate(event._id,{$push:{reg_users:user._id}});
    await User.findByIdAndUpdate(user._id,{$push:{reg_events:event._id}});
    res.status(200).send({message : 'Registered successfully'});
    }
    
  }
});


module.exports = {createEvent, registerEvent };