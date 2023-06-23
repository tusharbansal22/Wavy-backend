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
  if(!req.body.userid || !req.body.eventid){
    res.status(400).send({message : 'All details are required'});
  }
  else{
    const event = await Event.findById(req.body.eventid);
    if(event['reg_users'].find( (reg_user)=>{return reg_user == req.body.userid })){
      res.status(400).send({message:'User already registered'});
    }
    else{
      await Event.findByIdAndUpdate(req.body.eventid,{$push:{reg_users:req.body.userid}});
    await User.findByIdAndUpdate(req.body.userid,{$push:{reg_users:req.body.eventid}});
    res.status(200).send({message : 'Registered successfully'});
    }
    
  }
});

module.exports = {createEvent, registerEvent};