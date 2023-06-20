const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  user_id: {
    type : mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"User"
  },
  email:{
    type:String,
    required: true,
  },
  reg_events:{
    type: [mongoose.Schema.Types.ObjectId]
  }
});

module.exports = mongoose.model('User',userSchema);