import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LoginHandler=async()=>{
       
  };
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
            {/* 1) Sign In: deep red → electric purple gradient */}
            <button
              className="
          w-full    cursor-pointer
          bg-gradient-to-r from-red-800 via-red-800 to-red-800
          text-white
          font-extrabold
          py-3
          rounded-2xl
          hover:from-red-900 hover:via-red-800 hover:to-red-800
          focus:outline-none focus:ring-4 focus:ring-red-800
          transition-all duration-300
        "
        onClick={}
            >
              Sign In
            </button>

            {/* 2) Forgot Password?: neon lime text (pops against the white) */}
            <button
              className="
          w-full 
          bg-transparent
          text-lime-400
          font-bold
          py-2
          hover:text-lime-300 hover:underline
          transition-colors duration-200
        "
            >
              Forgot Password?
            </button>

            {/* 3) Create Account: sunset orange → deep red gradient + pulse */}
            <button
              className="
          w-full    cursor-pointer
          bg-gradient-to-r from-red-800 via-red-800 to-red-800
          text-white
          font-extrabold
          py-3
          rounded-2xl
          hover:from-red-900 hover:via-red-800 hover:to-red-800
          focus:outline-none focus:ring-4 focus:ring-red-800
          transition-all duration-300
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
