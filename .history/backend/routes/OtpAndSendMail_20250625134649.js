const express = require('express');
const router = express.Router();
const User = require('../storageSchema/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Configure your SMTP transporter (Gmail example)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// POST /request-reset-otp
router.post('/request-reset-otp', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required.' });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Generate a 6-digit OTP
        const otp = crypto.randomInt(100000, 999999).toString();
        const expires = Date.now() + 15 * 60 * 1000; // 15 minutes

        // Save to user record
        user.resetOtp = otp;
        user.resetOtpExpires = expires;
        await user.save();

        // Load HTML template and inject OTP
        const htmlTemplatePath = path.join(__dirname, '../mail_message_TEMPLATE/otpEmail.');
        let htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf-8');
        htmlTemplate = htmlTemplate.replace('{{OTP}}', otp);

        // Mail options
        const mailOptions = {
            from: `"Sanaaya Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Your OTP for Password Reset',
            html: htmlTemplate,
            text: `Your OTP for password reset is: ${otp}. It will expire in 15 minutes.`,
            attachments: [
                {
                    filename: 'newestLogo.png',
                    path: path.join(__dirname, '../../PTAL-FL-001/public/newestLogo.png'),
                    cid: 'sanaaya-logo' // must match cid in HTML
                }
            ]
        };

        await transporter.sendMail(mailOptions);
        return res.json({ success: true, message: 'OTP sent to email.' });

    } catch (err) {
        console.error('OTP request error:', err);
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
