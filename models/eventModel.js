const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  model_id :{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  parent_user :{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  reg_users:{
    type: [mongoose.Schema.Types.ObjectId]
  }
})

module.exports = mongoose.model('Event', eventSchema);