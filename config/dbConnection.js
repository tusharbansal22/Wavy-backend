const mongoose = require('mongoose');

const connectDb = async () => {
    try{
      const connect = await mongoose.connect(process.env.MONGODB_CONNNECTION_STRING);
      console.log('Connected to database', connect.connection.host, connect.connection.name);
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
};

module.exports = connectDb;