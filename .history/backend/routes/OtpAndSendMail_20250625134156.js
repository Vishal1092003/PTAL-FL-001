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

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const otp = crypto.randomInt(100000, 999999).toString();
        const expires = Date.now() + 15 * 60 * 1000;

        user.resetOtp = otp;
        user.resetOtpExpires = expires;
        await user.save();

        const htmlTemplatePath = path.join(__dirname, '../mail_message_TEMPLATE/otpEmail.html');
        let htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf-8');
        htmlTemplate = htmlTemplate.replace('{{OTP}}', otp);

        const mailOptions = {
            from: `"Sanaaya Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Your OTP for Password Reset',
            html: htmlTemplate,
            text: `Your OTP for password reset is: ${otp}. It will expire in 15 minutes.`,
            attachments: [
                {
                    filename: 'sanaaya-logo.png',
                    path: path.join(__dirname, '../../PTAL-FL-001/public/newestLogo.png'),
                    cid: 'sanaaya-logo'
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
