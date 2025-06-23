const express = require('express');
const dbconnect = require('./database/mongodb');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



const PORT = process.env.PORT || 8080;

// Routes
const login = require('./routes/Login');
const signup = require('./routes/Signup');
const OtpAndSendMail=require("./routes/OtpAndSendMail");
const ResetPassword=require("./routes/ResetPassword")
// const product = require('./routes/ProductManagement');
// const orders = require('./routes/orderRoutes');
// const dashboardRoutes = require("./routes/dashboardRoutes");


app.get("/", (req, res) => {
  res.send(`app started at ${PORT}`);
});

app.listen(PORT,(req,res)=>{
    console.log(`app started at ${PORT}`)
})

// app.use('/group', groupRoutes);
app.use(login);
app.use(signup);
// app.use(OtpAndSendMail);
// app.use(ResetPassword);
// app.use(product);
// app.use(orders);
// app.use(dashboardRoutes);
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
dbconnect();

module.exports = app; // ✅ export for server.js



