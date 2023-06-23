require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/dbConnection');
var cors = require('cors')
connectDb();



const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/event", require("./routes/eventRoutes"));

app.get('/', (req,res)=>{
  res.send('Backend running');
})
app.listen(process.env.PORT, function () {
  console.log('Backend running');
})