// index.js
const express = require('express');
const dbconnect = require('./database/mongodb');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// 1) Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// 2) API routes (mount before static/fallback)
app.use('/api', require('./routes/Login'));            // POST /api/login
app.use('/api', require('./routes/Signup'));           // POST /api/signup
app.use('/api', require('./routes/OtpAndSendMail'));   // POST /api/request-reset-otp
app.use('/api', require('./routes/ResetPassword'));    // POST /api/setpassword

// 3) Optional health-check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'API healthy' });
});

// 4) Serve React build
app.use(express.static(path.join(__dirname, 'build')));

// 5) SPA fallback—use '/*' so path-to-regexp sees a valid wildcard
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 6) Connect to DB and start
dbconnect();
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
