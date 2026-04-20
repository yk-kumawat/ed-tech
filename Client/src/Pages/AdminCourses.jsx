// src\Pages\AdminCourses.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../services/api";
import Header from "../Components/Header";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="p-8">

        {/* 🔹 TOP STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Total Courses</h3>
            <p className="text-2xl font-bold">{courses.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Active Courses</h3>
            <p className="text-2xl font-bold">{courses.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Total Students</h3>
            <p className="text-2xl font-bold">--</p>
          </div>

        </div>

        {/* 🔹 HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Courses</h1>

          <button
            onClick={() => navigate("/admin/create-course")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow"
          >
            + Create Course
          </button>
        </div>

        {/* 🔹 COURSE GRID */}
        {courses.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-lg font-semibold">No Courses Found</h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {courses.map(course => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${course.image}`}
                  className="h-40 w-full object-cover"
                />

                {/* Content */}
                <div className="p-4">

                  <h3 className="font-semibold text-lg">{course.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {course.category}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">

                    <button
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="bg-gray-200 px-3 py-1 rounded text-sm"
                    >
                      View
                    </button>

                    <button
                      onClick={() => navigate(`/admin/add-session/${course._id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                    >
                      + Session
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourses;