const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  
  parent_user :{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  reg_users:{
    type: [mongoose.Schema.Types.ObjectId]
  }
},{timestamp:true})

module.exports = mongoose.model('Event', eventSchema);