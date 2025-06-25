import { useState, useEffect } from 'react';

function OtpModal({ showOtpModal, handleVerifyOtp, loading, otp, setOtp, onClose }) {
    const [timer, setTimer] = useState(60);
    const otpLength = 6;

    useEffect(() => {
        if (showOtpModal && timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [showOtpModal, timer]);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const otpArray = otp.split('');
        otpArray[index] = value;
        const newOtp = otpArray.join('');
        setOtp(newOtp);

        // Focus next input if value is entered
        if (value && index < otpLength - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const renderOtpInputs = () => {
        const otpArray = otp.padEnd(otpLength).split('');
        return (
            <div className="flex justify-center gap-2 mt-2 mb-4">
                {otpArray.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                ))}
            </div>
        );
    };

    if (!showOtpModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h3 className="text-xl font-semibold text-center mb-2">Please verify your email</h3>
                <p className="text-center text-gray-600 mb-4">
                    Enter the One Time Password (OTP) sent to your email.
                </p>

                {/* OTP Input Boxes */}
                {renderOtpInputs()}

                {/* Countdown + Resend */}
                <div className="text-center text-sm text-gray-500 mb-4">
                    Didn't receive OTP? Resend in – <span className="text-blue-600 font-medium">{timer} sec</span>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleVerifyOtp}
                    disabled={loading}
                    className={`w-full bg-red-800 text-white font-bold py-2 rounded-2xl hover:bg-red-900 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {loading ? 'Verifying…' : 'Submit'}
                </button>

                {/* Close button */}
                <div className="mt-4 text-center">
                    <button onClick={onClose} className="text-gray-500 hover:underline text-sm">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtpModal;
