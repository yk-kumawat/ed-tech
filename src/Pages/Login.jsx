import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-[#dcece0] p-6">
      <div className="relative w-full max-w-5xl md:flex rounded-2xl shadow-2xl overflow-hidden bg-white md:min-h-150 h-[80%]">

        {/* LEFT PANEL */}
        <div className="flex md:w-1/2 h-[32%] md:h-auto relative items-center justify-center text-white p-12 bg-[#1A5C68]">
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
            <h2 className="md:text-4xl text-3xl font-bold md:mb-6 mb-3">Welcome Back!</h2>
            <p className="md:text-lg text-sm text-blue-100 md:mb-8 font-light leading-relaxed">
              Continue your learning journey today. Pick up right where you left
              off and achieve your career goals.
            </p>

            {/* Progress card */}
            <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg mt-8 transform rotate-2 hover:rotate-0 transition duration-500">
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
        <div className="w-full md:w-1/2 p-7 md:p-12 lg:p-16 flex items-center">
          <div className="w-full mx-auto">
            <div className="mb-8">
              <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-2">
                Login
              </h1>
              <p className="text-gray-500 text-sm md:text-[1em]">
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

