import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  ChevronLeft,
  ChevronRight,
  Loader2 // Import Loader2 for loading state
} from 'lucide-react';
import Header from '../Components/Header';
import { useAuth } from '../Context/AuthContext'; // To get token for authenticated requests

const CourseInventory = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('All Courses (0)'); // Will update count dynamically
  const navigate = useNavigate();
  const { token } = useAuth(); // Get token from AuthContext

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses`, {
        headers: {
          'Authorization': `Bearer ${token}` // Include token for authentication
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
      setActiveTab(`All Courses (${data.length})`); // Update dynamic count
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [token]); // Refetch when token changes

  const handleDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/${courseId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}` // Include token for authentication
          }
        });
        if (!response.ok) {
          throw new Error('Failed to delete course');
        }
        fetchCourses(); // Refresh the list after deletion
      } catch (err) {
        alert(`Error deleting course: ${err.message}`);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#1c454e]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title & CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1c454e]">Course Inventory</h2>
              <p className="text-slate-500 mt-1">Manage and monitor all educational offerings across the platform.</p>
            </div>
            <button 
              className="inline-flex items-center gap-2 bg-[#1c454e] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2a5a65] transition-all shadow-sm"
              onClick={() => navigate('/courses-inventory/new')} // Navigate to CourseForm for new course
            >
              <Plus className="w-5 h-5" />
              Add New Course
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            {/* Filter buttons - simplified for now */}
            <button
              onClick={() => setActiveTab(`All Courses (${courses.length})`)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab.startsWith('All Courses') 
                ? 'bg-white border border-slate-200 text-[#1c454e] shadow-sm' 
                : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              All Courses ({courses.length})
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Course Name</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Category</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Instructor</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Thumbnail</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {courses.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-5 text-center text-slate-500">
                        No courses found. Add a new course to get started!
                      </td>
                    </tr>
                  ) : (
                    courses.map((course) => (
                      <tr key={course._id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-5">
                          <span className="font-semibold text-[#1c454e]">{course.name}</span>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">{course.category}</td>
                        <td className="px-6 py-5 text-sm text-slate-600">{course.instructor}</td>
                        <td className="px-6 py-5">
                          {course.thumbnail && (
                            <img src={course.thumbnail} alt="Thumbnail" className="h-10 w-10 object-cover rounded-md" />
                          )}
                        </td>
                        <td className="px-6 py-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              className="p-2 text-slate-400 hover:text-[#1c454e] transition-colors" 
                              title="Edit"
                              onClick={() => navigate(`/courses-inventory/edit/${course._id}`)} // Navigate to CourseForm for editing
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              className="p-2 text-slate-400 hover:text-red-500 transition-colors" 
                              title="Delete"
                              onClick={() => handleDelete(course._id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination - Removed for simplicity as the backend doesn't support it yet */}
            {/* <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              <p className="text-sm text-slate-500">Showing <span className="font-medium">1-{courses.length}</span> of <span className="font-medium">{courses.length}</span> results</p>
              <div className="flex items-center gap-2">
                <button 
                  disabled 
                  className="px-3 py-1 border border-slate-200 rounded bg-white text-sm disabled:opacity-50 flex items-center gap-1 hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button className="px-3 py-1 border border-slate-200 rounded bg-white text-sm flex items-center gap-1 hover:bg-slate-50 transition-colors">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseInventory;