import { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  // 🔥 ADMIN UI
  if (user?.role === "admin") {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />

        <div className="p-8">

          {/* 🔹 HEADER */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Admin Dashboard</h2>
              <p className="text-gray-500 text-sm">
                Manage your courses, sessions and tasks
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/create-course")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow"
            >
              + Create Course
            </button>
          </div>

          {/* 🔹 COURSES GRID */}
          <div className="grid md:grid-cols-3 gap-6">
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

                  {/* 🔥 ADMIN ACTIONS */}
                  <div className="flex gap-2 flex-wrap">

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

                    <button
                      onClick={() => navigate(`/admin/create-task/${course._id}`)}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                    >
                      + Task
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // 👤 USER UI (same as before)
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">My Courses</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course._id}
              onClick={() => navigate(`/course/${course._id}`)}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${course.image}`}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{course.name}</h3>
                <p className="text-sm text-gray-500">{course.category}</p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded text-sm">
                  Continue →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;