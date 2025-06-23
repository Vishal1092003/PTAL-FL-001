import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const navigate = useNavigate();

  const LoginHandler = async () => {
    setLoading(true);
    if (!email.trim() || !password) {
      toast.error("Please enter both email and password.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || (data && data.success === false)) {
        const msg = (data && data.message) || "Login failed";
        throw new Error(msg);
      }
      const { token } = data;
      localStorage.setItem("authToken", token);
      toast.success(data.message || "Logged in successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterToggle = () => {
    setIsRegisterMode(true);
  };

  const handleCreateAccount = () => {
    
    setIsRegisterMode(false);
    navigate("/signin");

  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
        `}
      </style>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-2">
        <div className="w-full max-w-sm md:max-w-md bg-white shadow-lg p-6 rounded-2xl">
          {/* headers */}
          <div className="text-center text-xl font-semibold text-gray-800 mb-3">
            {isRegisterMode ? "CREATE AN ACCOUNT" : "SIGN IN to p-TAL"}
          </div>
          <div
            className="text-center text-5xl md:text-7xl text-red-800 mb-4"
            style={{ fontFamily: "'Clicker Script', cursive" }}
          >
            {isRegisterMode ? "Join Us!" : "Welcome Back!"}
          </div>
          <div className="text-center text-lg font-semibold text-gray-600 mb-6">
            {isRegisterMode ? "Create your new account below" : "We're happy you're here"}
          </div>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email Address"
            className="border border-black rounded-full px-4 py-2 w-full mb-4 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="border border-black rounded-full px-4 py-2 w-full mb-8 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="max-w-sm mx-auto space-y-4 text-center">
            {!isRegisterMode ? (
              <>  {/* Sign In mode buttons */}
                <button
                  onClick={LoginHandler}
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
                  {loading ? "Signing In…" : "Sign In"}
                </button>

                <button
                  className="
                    w-full bg-transparent text-lime-400 font-bold py-2
                    hover:text-lime-300 hover:underline
                    transition-colors duration-200 cursor-pointer
                  "
                >
                  Forgot Password?
                </button>

                <button
                  onClick={handleRegisterToggle}
                  className={`
                    w-full cursor-pointer
                    bg-gradient-to-r from-red-800 via-red-800 to-red-800
                    text-white font-extrabold py-3 rounded-2xl
                    hover:from-red-900 hover:via-red-800 hover:to-red-800
                    focus:outline-none focus:ring-4 focus:ring-red-800
                    transition-all duration-300 animate-pulse`
                  }
                >
                  New Here? Create an Account
                </button>
              </>
            ) : (
              /* Register mode: only Create Account button */
              <button
                onClick={handleCreateAccount}
                className="
                  w-full cursor-pointer
                  bg-gradient-to-r from-red-800 via-red-800 to-red-800
                  text-white font-extrabold py-3 rounded-2xl
                  hover:from-red-900 hover:via-red-800 hover:to-red-800
                  focus:outline-none focus:ring-4 focus:ring-red-800
                  transition-all duration-300
                "
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
