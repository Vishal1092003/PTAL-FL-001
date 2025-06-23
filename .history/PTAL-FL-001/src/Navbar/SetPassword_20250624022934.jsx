import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SetPassword() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSetPassword = async () => {
        setLoading(true);
        if (!email.trim() || !otp.trim() || !newPassword || !confirmPassword) {
            toast.error("Please fill all fields.");
            setLoading(false);
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            setLoading(false);
            return;
        }
        try {
            const res = await fetch("http://localhost:8080/setpassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp, newPassword }),
            });
            const data = await res.json().catch(() => null);
            if (!res.ok || (data && data.success === false)) {
                throw new Error((data && data.message) || "Reset failed");
            }
            toast.success(data.message || "Password reset successfully!");
            setTimeout(() => navigate('/signin'), 1500);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');`}
            </style>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <div className="flex flex-col items-center justify-start pt-10 min-h-screen bg-gray-100 px-2 space-y-4">
                <button
                    onClick={() => navigate('/signin')}
                    className="text-red-600 font-semibold hover:underline"
                >
                    Back to Sign In
                </button>
                <div className="w-full max-w-sm md:max-w-md bg-white shadow-lg p-6 rounded-2xl">
                    <div className="text-center text-xl font-semibold text-gray-800 mb-3">
                        RESET PASSWORD
                    </div>
                    <div
                        className="text-center text-5xl md:text-7xl text-red-800 mb-4"
                        style={{ fontFamily: "'Clicker Script', cursive" }}
                    >
                        Set New Password
                    </div>
                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-black rounded-full px-4 py-2 w-full placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            placeholder="OTP sent to email"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="border border-black rounded-full px-4 py-2 w-full placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-black rounded-full px-4 py-2 w-full placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-black rounded-full px-4 py-2 w-full placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                            onClick={handleSetPassword}
                            disabled={loading}
                            className={`w-full cursor-pointer bg-gradient-to-r from-red-800 to-red-800 text-white font-extrabold py-3 rounded-2xl hover:from-red-900 hover:to-red-900 focus:outline-none focus:ring-4 focus:ring-red-800 transition duration-300 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Setting…' : 'Set Password'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SetPassword;
