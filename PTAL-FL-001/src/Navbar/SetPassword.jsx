import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SetPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

    // Countdown logic
    useEffect(() => {
        if (showOtpModal && timer > 0) {
            const countdown = setTimeout(() => setTimer(prev => prev - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [showOtpModal, timer]);

    const handleRequestOtp = async () => {
        setLoading(true);
        if (!email.trim() || !newPassword || !confirmPassword) {
            toast.error("Please fill email and passwords first.");
            setLoading(false);
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            setLoading(false);
            return;
        }
        try {
            const res = await fetch("http://localhost:8080/request-reset-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (!res.ok || (data && data.success === false)) {
                throw new Error(data.message || "OTP request failed");
            }
            toast.success("OTP sent to your email.");
            setOtp(""); // Reset OTP input
            setTimer(60); // Reset countdown
            setShowOtpModal(true);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        setLoading(true);
        if (otp.length !== 6) {
            toast.error("Please enter the full 6-digit OTP.");
            setLoading(false);
            return;
        }
        try {
            const res = await fetch("http://localhost:8080/setpassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp, newPassword }),
            });
            const data = await res.json();
            if (!res.ok || (data && data.success === false)) {
                throw new Error(data.message || "Reset failed");
            }
            toast.success(data.message || "Password reset successfully!");
            setShowOtpModal(false);
            setTimeout(() => navigate('/signin'), 1500);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="flex flex-col items-center justify-start pt-10 min-h-screen bg-gray-100 px-4 space-y-6">
                <button
                    onClick={() => navigate('/signin')}
                    className="text-red-600 font-semibold hover:underline"
                >
                    Back to Sign In
                </button>

                <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-2xl">
                    <h2 className="text-xl font-semibold text-center mb-4">Reset Your Password</h2>

                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                            onClick={handleRequestOtp}
                            disabled={loading}
                            className={`w-full bg-red-800 text-white font-bold py-2 rounded-2xl hover:bg-red-900 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Requesting OTP…' : 'Request OTP'}
                        </button>
                    </div>
                </div>

                {/* OTP Modal */}
                {showOtpModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                            <h3 className="text-lg font-semibold text-center mb-2">Please verify your Email</h3>
                            <p className="text-center text-gray-600 mb-4">
                                Enter the One Time Password (OTP) sent to your registered email.
                            </p>

                            {/* OTP Boxes */}
                            <div className="flex justify-center gap-2 mt-2 mb-4">
                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="w-10 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={otp[index] || ""}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (!/^\d?$/.test(val)) return;
                                            const otpArr = otp.split("");
                                            otpArr[index] = val;
                                            const updated = otpArr.join("").slice(0, 6);
                                            setOtp(updated);

                                            if (val && index < 5) {
                                                const next = document.getElementById(`otp-${index + 1}`);
                                                next?.focus();
                                            }
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="text-center text-sm text-gray-500 mb-4">
                                Didn't receive OTP? Resend in – <span className="text-blue-600 font-medium">{timer} sec</span>
                            </div>

                            <button
                                onClick={handleVerifyOtp}
                                disabled={loading}
                                className={`w-full bg-red-800 text-white font-bold py-2 rounded-2xl hover:bg-red-900 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Verifying…' : 'Verify OTP & Set Password'}
                            </button>

                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setShowOtpModal(false)}
                                    className="text-gray-500 hover:underline text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SetPassword;
