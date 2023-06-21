const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email:{
    type:String,
    required: true,
  },
  password:{
    type:String,
  },
  reg_events:{
    type: [mongoose.Schema.Types.ObjectId],
    default:[]
  }
},{timestamp:true});

module.exports = mongoose.model('User',userSchema);