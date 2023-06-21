const mongoose = require('mongoose');

const connectDb = async () => {
    try{
      const connect = await mongoose.connect(process.env.MONGODB_CONNNECTION_STRING);
      console.log('Connected to database');
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
};

module.exports = connectDb;