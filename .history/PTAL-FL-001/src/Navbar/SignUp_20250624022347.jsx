import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCreateAccount = async () => {
        setLoading(true);
        if (!email.trim() || !password) {
            toast.error("Please enter both email and password to register.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json().catch(() => null);
            if (!res.ok || (data && data.success === false)) {
                const msg = (data && data.message) || "Registration failed";
                throw new Error(msg);
            }
            toast.success(data.message || "Account created successfully!");
            // Reset form
            setEmail("");
            setPassword("");
            // Redirect to sign in after short delay
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
                {/* Sign In navigation button above */}
               

                <div className="w-full max-w-sm md:max-w-md bg-white shadow-lg p-6 rounded-2xl">
                    <div className="text-center text-xl font-semibold text-gray-800 mb-3">
                        CREATE AN ACCOUNT
                    </div>
                    <div
                        className="text-center text-5xl md:text-7xl text-red-800 mb-4"
                        style={{ fontFamily: "'Clicker Script', cursive" }}
                    >
                        Join Us!
                    </div>
                    <div className="text-center text-lg font-semibold text-gray-600 mb-6">
                        Create your new account below
                    </div>

                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-black rounded-full px-4 py-2 w-full mb-4 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-black rounded-full px-4 py-2 w-full mb-8 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <button
                        onClick={handleCreateAccount}
                        disabled={loading}
                        className={`
              w-full cursor-pointer
              bg-gradient-to-r from-red-800 via-red-800 to-red-800
              text-white font-extrabold py-3 rounded-2xl
              hover:from-red-900 hover:via-red-800 hover:to-red-800
              focus:outline-none focus:ring-4 focus:ring-red-800
              transition-all duration-300
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`
                        }
                    >
                        {loading ? 'Creating…' : 'Create Account'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default SignUp;
