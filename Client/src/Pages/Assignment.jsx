// src\Pages\Assignment.jsx
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";

const AssignmentPage = () => {

  const [hoursLeft, setHoursLeft] = useState(48);
  const [fileName, setFileName] = useState("");

  const [checklist, setChecklist] = useState([
    false,
    false,
    false,
    false,
  ]);

  /* ================= COUNTDOWN ================= */
  useEffect(() => {

    let totalSeconds = 48 * 60 * 60;

    const timer = setInterval(() => {

      setHoursLeft(Math.floor(totalSeconds / 3600));

      if (totalSeconds > 0) totalSeconds--;

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  /* ================= FILE ================= */
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  /* ================= CHECKLIST ================= */
  const toggleCheck = (index) => {
    const updated = [...checklist];
    updated[index] = !updated[index];
    setChecklist(updated);
  };

  return (

    <div className="bg-white">
      <Header />
      <div className="flex justify-between">
        <Sidebar />

        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
          <div className="bg-[#f4f6fb] min-h-screen p-6">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

              {/* ================= LEFT ================= */}
              <div className="lg:col-span-2 space-y-6">

                {/* Assignment */}
                <div className="bg-white rounded-2xl p-7 shadow border">

                  <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-1 rounded-full">
                    Module 5: Backend Development
                  </span>

                  <h1 className="text-2xl font-bold mt-4">
                    Build a Full-Stack E-commerce API
                  </h1>

                  <div className="flex flex-wrap gap-5 text-sm text-gray-500 mt-4">

                    <span>📅 Deadline: Sept 30, 2026</span>
                    <span>⚡ Intermediate</span>

                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Pending
                    </span>

                  </div>

                  <h3 className="font-semibold mt-6 mb-2">
                    Assignment Description
                  </h3>

                  <p className="text-sm text-gray-700">
                    Develop a RESTful API using Node.js and Express.
                    Handle product catalogs, authentication,
                    and order processing.
                  </p>

                </div>

                {/* Requirements */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="bg-white rounded-2xl p-6 shadow border">
                    <h3 className="font-semibold mb-3">
                      Core Requirements
                    </h3>

                    <ul className="space-y-2 text-sm">
                      <li>✔ MongoDB schema design</li>
                      <li>✔ JWT Authentication</li>
                      <li>✔ CRUD operations</li>
                      <li>✔ Error handling</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow border">
                    <h3 className="font-semibold mb-3">
                      AI Usage Rules
                    </h3>

                    <ul className="space-y-2 text-sm">
                      <li>✔ Debugging allowed</li>
                      <li>✔ Original logic required</li>
                      <li>✔ No copy paste</li>
                    </ul>
                  </div>

                </div>

                {/* Submit */}
                <div className="bg-white rounded-2xl p-7 shadow border">

                  <h3 className="font-semibold mb-4">
                    Submit Your Work
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">

                    <input
                      placeholder="GitHub Repository URL"
                      className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <input
                      placeholder="Live Demo Link"
                      className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                  </div>

                  <textarea
                    placeholder="Explain your architecture..."
                    className="w-full border rounded-lg p-3 mt-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />

                  {/* Upload */}
                  <label className="border-2 border-dashed rounded-xl p-8 text-center block cursor-pointer mt-4 hover:border-indigo-500">

                    {fileName || "Drag & Drop or Click to Upload"}

                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                    />

                  </label>

                  <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 shadow-lg">
                    Submit Assignment
                  </button>

                </div>

              </div>

              {/* ================= RIGHT ================= */}
              <div className="space-y-6">

                {/* Summary */}
                <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-2xl p-8 shadow-xl">

                  <p className="text-xs opacity-80">
                    TIME REMAINING
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {hoursLeft} hours left
                  </h2>

                  <hr className="my-6 opacity-30" />

                  <div className="space-y-4 text-sm">

                    <div className="flex justify-between">
                      <span>Total Marks</span>
                      <strong>100 Pts</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Assigned Mentor</span>
                      <strong>Gaurav G.</strong>
                    </div>

                  </div>

                </div>

                {/* Mentor Feedback */}
                <div className="bg-white rounded-2xl p-6 shadow border">

                  <h3 className="font-semibold mb-4">
                    ⭐ Mentor Feedback
                  </h3>

                  <div className="bg-gray-50 rounded-xl p-5 text-center">

                    <p className="font-semibold text-gray-700">
                      Waiting for submission
                    </p>

                    <span className="text-xs text-gray-500">
                      Feedback will appear after review.
                    </span>

                  </div>

                </div>

                {/* Checklist */}
                <div className="bg-white rounded-2xl p-6 shadow border">

                  <h3 className="font-semibold mb-4">
                    ✔ Submission Checklist
                  </h3>

                  {[
                    "Clean commits",
                    "Proper README",
                    "Original Code",
                    "Ready to explain",
                  ].map((item, index) => (

                    <label
                      key={index}
                      className="flex items-center gap-3 mb-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={checklist[index]}
                        onChange={() => toggleCheck(index)}
                      />
                      {item}
                    </label>

                  ))}

                </div>

                {/* Help */}
                <div className="bg-indigo-50 border rounded-2xl p-6">

                  <h3 className="font-semibold">
                    ❓ Need help?
                  </h3>

                  <p className="text-sm mt-2 text-gray-600">
                    Join the community discussion.
                  </p>

                  <button className="w-full mt-4 bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    Join Discussion
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        <RightSidebar />
      </div>
    </div >
  );
};

export default AssignmentPage;