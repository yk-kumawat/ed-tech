import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row max-h-170">

        {/* LEFT PANEL */}
        <div className="hidden md:flex md:w-1/2 bg-[#D4E8D8] p-10 flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1E4D5F] mb-4">
              Start your learning journey today.
            </h2>
            <p className="text-[#1E4D5F]/80 text-lg mb-6">
              Join over 1.5 Lac+ learners mastering new tech skills.
            </p>

            <ul className="space-y-3 text-[#1E4D5F]/90">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Unlimited access to all courses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Interactive coding environments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>Certification upon completion</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3QTDc5t9Rd40JVSiwUyrCOEL316kGleY6myCD6GUEdUKHYOKh1FQ_MNFB0HRyt75jyyCgEJKUEYglj9I5NBavcOs-sBir7Zyz1_5fhFd2SEJzNQWenVIBV3rlLdguIi4z_cnw4VNLARCk7XeZQtO0pXrMxF8_5OTCBobBHIbaV88waWTb2jrgxP-EDM_juP2zq42js5f4lmx-L43yOPcsv0o3jL1fatprNiGnLebJoDiShObFkR2yztqzgMu-_tNzZal576BVBQ1n"
              alt="Student illustration"
              className="w-full max-w-xs object-contain"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Sign up to get started with EdTech.
            </p>
          </div>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
            />

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" className="mt-1" />
              <span>
                I agree to the{" "}
                <span className="text-[#1E4D5F] font-semibold cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#1E4D5F] font-semibold cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#1E4D5F] hover:bg-[#163A48] text-white font-bold py-3 rounded-lg transition-transform active:scale-95"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span onClick={() => {navigate('/login')}} className="font-semibold text-[#1E4D5F] hover:underline cursor-pointer">
              Log in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

