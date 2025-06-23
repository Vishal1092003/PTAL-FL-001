import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
        `}
      </style>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-2">
        <div className="w-full max-w-sm md:max-w-md bg-white shadow-lg p-6 rounded-2xl">
          <div className="text-center text-xl font-semibold text-gray-800 mb-3">
            SIGN IN to p-TAL
          </div>

          <div
            className="text-center text-5xl md:text-7xl text-red-800 mb-4"
            style={{ fontFamily: "'Clicker Script', cursive" }}
          >
            Welcome Back!
          </div>

          <div className="text-center text-lg font-semibold text-gray-600 mb-6">
            We're happy you're here
          </div>

          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="text"
            placeholder="Email Address"
            className="border border-black rounded-full px-4 py-2 w-full mb-4 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-black rounded-full px-4 py-2 w-full mb-8 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="max-w-sm mx-auto space-y-4 text-center">
            {/* Primary “Sign In” button – now in red to match “Welcome Back!” */}
            <button
              className="
          w-full
          bg-red-600
          text-white
          font-bold
          py-2
          px-4
          rounded-lg
          hover:bg-red-700
          focus:outline-none
          focus:ring-2
          focus:ring-red-500
          transition
          duration-200
        "
            >
              Sign In
            </button>

            {/* Secondary “Forgot Password?” link-style button */}
            <button
              className="
          w-full
          bg-transparent
          text-red-600
          font-semibold
          py-2
          px-4
          hover:text-red-700
          hover:underline
          transition
          duration-200
        "
            >
              Forgot Password?
            </button>

            {/* Accent “Create Account” – now also red */}
            <button
              className="
          w-full
          bg-red-600
          text-white
          font-bold
          py-2
          px-4
          rounded-lg
          hover:bg-red-700
          focus:outline-none
          focus:ring-2
          focus:ring-red-500
          transition
          duration-200
        "
            >
              New Here? Create an Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
