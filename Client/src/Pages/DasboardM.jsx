// src\Pages\DasboardM.jsx
import React from "react";

const Dashboardm = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">

      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          Mark My Attendance
        </button>

        <h2 className="text-xl font-semibold tracking-widest">
          09 : 04 : 56
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">

          {/* Course Card */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="course"
                className="w-full h-52 object-cover"
              />

              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                CONTINUE LEARNING
              </span>

              <span className="absolute bottom-3 right-3 text-white text-sm">
                45:00
              </span>
            </div>

            <div className="p-5 flex flex-col md:flex-row justify-between gap-4">

              <div>
                <h3 className="font-semibold text-lg">
                  Mastering React Hooks
                </h3>

                <p className="text-gray-500 text-sm">
                  Advanced patterns, performance optimization,
                  and custom hooks.
                </p>
              </div>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                Continue →
              </button>

            </div>
          </div>

          {/* Today's Task */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row justify-between gap-4">

            <div>
              <p className="text-gray-500 text-sm">
                Today's Task
              </p>

              <h3 className="font-semibold text-lg">
                Build a Weather App
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Integrate OpenWeather API and implement
                dynamic background changes.
              </p>

              <p className="text-sm mt-2">
                Due: 6:00 PM Today
              </p>
            </div>

            <div className="flex flex-col justify-between items-end">

              <span className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg text-sm">
                IN PROGRESS
              </span>

              <a
                href="#"
                className="text-blue-600 text-sm mt-6"
              >
                View Details
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">

          {/* Learning Progress */}
          <div className="bg-white rounded-xl shadow p-5">

            <p className="text-gray-500">
              Learning Progress
            </p>

            <div className="flex justify-between items-center mt-4">

              <div>
                <h3 className="font-semibold">
                  Course Completion
                </h3>

                <p className="text-sm text-gray-500">
                  Javascript Loops
                </p>

                <p className="text-sm mt-2">
                  Next : Chapter - Functions
                </p>
              </div>

              {/* Progress Circle */}
              <div className="w-20 h-20 rounded-full border-8 border-green-500 flex items-center justify-center font-bold">
                65%
              </div>

            </div>

          </div>

          {/* Deadlines */}
          <div className="bg-white rounded-xl shadow p-5">

            <h3 className="font-semibold mb-4">
              Upcoming Deadlines
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Project - 1</span>
                <span className="text-red-500">
                  Due Today
                </span>
              </div>

              <div className="flex justify-between">
                <span>Project - 3</span>
                <span>May 23</span>
              </div>

              <div className="flex justify-between">
                <span>Project - 2</span>
                <span>June 12</span>
              </div>

            </div>

          </div>

          {/* Performance */}
          <div className="bg-white rounded-xl shadow p-5">

            <p className="text-gray-500">
              Student Performance
            </p>

            <h3 className="font-semibold mt-2">
              Average Grade
            </h3>

            <div className="flex justify-between items-center mt-4">

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Increase the Performance
              </button>

              <div className="w-20 h-20 rounded-full border-8 border-purple-500 flex items-center justify-center font-bold">
                62%
              </div>

            </div>

          </div>

        </div>

      </div>
    

    
    </div>
  );
};

export default Dashboardm;