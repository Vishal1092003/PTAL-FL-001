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

// 2) API Routes (mount before static/fallback)
app.use('/api', require('./routes/Login'));          // handles POST /api/login
app.use('/api', require('./routes/Signup'));         // handles POST /api/signup
app.use('/api', require('./routes/OtpAndSendMail')); // handles POST /api/request-reset-otp
app.use('/api', require('./routes/ResetPassword'));  // handles POST /api/setpassword

// 3) Health-check endpoint
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'API is healthy' });
});

// 4) Serve React build (after APIs)
app.use(express.static(path.join(__dirname, 'build')));
// catch-all for React Router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 5) Connect DB & start server
dbconnect();
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
