require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/dbConnection');
connectDb();

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.listen(process.env.PORT, function () {
  console.log('Backend running');
})