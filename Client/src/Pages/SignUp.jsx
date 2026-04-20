// src\Pages\SignUp.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.email.split('@')[0], // Simple username generation
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row max-h-170">

        {/* LEFT PANEL */}
        <div className="hidden md:flex md:w-1/2 bg-[#D4E8D8] p-10 flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1E4D5F] mb-4">
              Start your learning journey today.
            </h2>

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
              className="w-full max-w-sm object-contain"
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

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
              required
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1E4D5F]"
              required
            />

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" className="mt-1" required />
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