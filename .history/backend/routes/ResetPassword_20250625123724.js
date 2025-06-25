// routes/SetPassword.js
const express = require('express');
const router = express.Router();
const User = require('../storageSchema/user');
const bcrypt = require('bcrypt');

// This example assumes you have saved a reset OTP and expiration on the user model
// e.g. user.resetOtp, user.resetOtpExpires

// POST /setpassword
router.post('/setpassword', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }
        
        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Verify OTP and expiration
        if (!user.resetOtp || user.resetOtp !== otp || user.resetOtpExpires < Date.now()) {
            return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
        }

        // Hash and update password
        const hash = await bcrypt.hash(newPassword, 10);
        user.password = hash;
        // Clear OTP fields
        user.resetOtp = undefined;
        user.resetOtpExpires = undefined;

        await user.save();

        return res.json({ success: true, message: 'Password has been reset.' });
    } catch (err) {
        console.error('Set password error:', err);
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
