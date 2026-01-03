import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dcece0] px-6">
      <div className="relative w-full max-w-5xl flex rounded-2xl shadow-2xl overflow-hidden bg-white min-h-150">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center text-white p-12 bg-[#1A5C68]">
          {/* gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-[#1A5C68] to-[#144852] opacity-90"></div>

          {/* dots */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 max-w-md text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
            <p className="text-lg text-blue-100 mb-8 font-light leading-relaxed">
              Continue your learning journey today. Pick up right where you left
              off and achieve your career goals.
            </p>

            {/* Progress card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg mt-8 transform rotate-2 hover:rotate-0 transition duration-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-10 w-10 bg-[#F4B82A] rounded-full flex items-center justify-center text-[#1A5C68] font-bold">
                  🎓
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Course Progress</p>
                  <p className="text-xs text-blue-200">Keep it up!</p>
                </div>
              </div>

              <div className="w-full bg-black/20 rounded-full h-2.5 mb-1">
                <div className="bg-[#F4B82A] h-2.5 rounded-full w-[75%]" />
              </div>

              <div className="flex justify-between text-xs text-blue-100 mt-1">
                <span>UI/UX Design</span>
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Login
              </h1>
              <p className="text-gray-500">
                Don't have an account?{" "}
                <span onClick={() => {navigate('/signup')}} className="text-[#1A5C68] font-semibold hover:underline cursor-pointer">
                  Sign up for free
                </span>
              </p>
            </div>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#1A5C68]"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <span className="text-sm text-[#1A5C68] hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#1A5C68]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#1A5C68] hover:bg-[#144852] text-white font-bold py-3 rounded-lg transition-transform hover:scale-[1.01]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

