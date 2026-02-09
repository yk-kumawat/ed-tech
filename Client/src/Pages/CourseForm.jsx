import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Info, 
  BookOpen, 
  Image as ImageIcon, 
  Trash2, 
  PlusCircle, 
  UploadCloud,
  Loader2
} from 'lucide-react';
import Header from '../Components/Header';
import { useAuth } from '../Context/AuthContext';

const CourseForm = () => {
  const { id: courseId } = useParams(); // Get course ID from URL if in edit mode
  const navigate = useNavigate();
  const { token } = useAuth(); // Get authentication token

  const [courseData, setCourseData] = useState({
    name: '',
    category: '',
    instructor: '',
    description: '',
    thumbnail: '', // This will hold the URL for edit mode, or be empty for new
  });
  const [selectedFile, setSelectedFile] = useState(null); // Holds the actual File object for upload
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = Boolean(courseId);

  // Styles for input and label
  const inputStyle = "block p-2 w-full rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#1c454e] focus:ring-2 focus:ring-[#1c454e] focus:ring-opacity-50 transition-all outline-none";
  const labelStyle = "block text-sm font-semibold text-slate-700 mb-2";

  // Fetch course data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      setLoading(true);
      const fetchCourse = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/${courseId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Failed to fetch course');
          }
          const data = await response.json();
          setCourseData({
            name: data.name,
            category: data.category,
            instructor: data.instructor,
            description: data.description,
            thumbnail: data.thumbnail, // Set existing thumbnail URL
          });
          setLectures(data.lectures.map(lec => ({ ...lec, id: lec._id || Date.now() }))); // Use _id or generate client-side ID
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchCourse();
    }
  }, [courseId, isEditMode, token]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      // Optional: Update courseData.thumbnail to show filename or preview temporarily
      // setCourseData(prevData => ({ ...prevData, thumbnail: e.target.files[0].name }));
    } else {
      setSelectedFile(null);
      // setCourseData(prevData => ({ ...prevData, thumbnail: '' }));
    }
  };

  const handleLectureChange = (id, field, value) => {
    setLectures((prevLectures) =>
      prevLectures.map((lecture) =>
        lecture.id === id ? { ...lecture, [field]: value } : lecture
      )
    );
  };

  const handleAddLecture = () => {
    setLectures((prevLectures) => [...prevLectures, { id: Date.now(), title: '', videoUrl: '' }]);
  };

  const handleRemoveLecture = (id) => {
    setLectures((prevLectures) => prevLectures.filter((lecture) => lecture.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.append('name', courseData.name);
    formData.append('category', courseData.category);
    formData.append('instructor', courseData.instructor);
    formData.append('description', courseData.description);
    formData.append('lectures', JSON.stringify(lectures)); // lectures as stringified JSON

    if (selectedFile) {
      formData.append('thumbnail', selectedFile); // Append the actual file object
    } else if (isEditMode && courseData.thumbnail === '') {
      // If in edit mode, no new file selected, and existing thumbnail was cleared
      // Send an empty string for thumbnail to explicitly clear it on backend
      formData.append('thumbnail', '');
    } else if (isEditMode && courseData.thumbnail) {
      // If in edit mode and no new file selected, but there's an existing thumbnail URL,
      // we don't need to append 'thumbnail' to formData. The backend will keep the old one.
      // But if the backend requires it, we can append the URL string.
      // For now, if no new file, and not explicitly cleared, we don't send it.
    }


    try {
      const url = isEditMode
        ? `${import.meta.env.VITE_API_URL}/api/courses/${courseId}`
        : `${import.meta.env.VITE_API_URL}/api/courses`;
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
          // Do NOT set 'Content-Type': 'multipart/form-data' here.
          // The browser sets it automatically with the correct boundary when using FormData.
        },
        body: formData, // Send FormData object
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || `Failed to ${isEditMode ? 'update' : 'create'} course`);
      }

      navigate('/courses-inventory'); // Redirect to inventory after success
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#1c454e]" />
      </div>
    );
  }

  if (error && !isSubmitting) { // Only show error if not currently submitting
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-red-600">
        Error: {error}
      </div>
    );
  }

  // Display current thumbnail or selected file preview
  const thumbnailPreview = selectedFile 
    ? URL.createObjectURL(selectedFile) 
    : (courseData.thumbnail ? `${import.meta.env.VITE_API_URL}${courseData.thumbnail}` : null);


  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* Header - Kept consistent with design */}
      <Header />

      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button 
              className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-[#1c454e] mb-4 transition-colors"
              onClick={() => navigate('/courses-inventory')}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Inventory
            </button>
            <h2 className="text-3xl font-bold tracking-tight text-[#1c454e]">
              {isEditMode ? 'Edit Course Details' : 'Add New Course'}
            </h2>
            <p className="text-slate-500 mt-1">
              {isEditMode ? 'Update the course curriculum, media, and settings.' : 'Configure your new course curriculum, media, and basic settings.'}
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Section: Basic Information */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <Info className="w-5 h-5 text-[#1c454e]" />
                <h3 className="text-lg font-bold">Basic Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelStyle} htmlFor="name">Course Name</label>
                  <input 
                    id="name" 
                    className={inputStyle} 
                    placeholder="e.g. Advanced UI/UX Principles" 
                    type="text"
                    value={courseData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className={labelStyle} htmlFor="category">Category</label>
                  <select 
                    id="category" 
                    className={inputStyle}
                    value={courseData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Business">Business</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>
                <div>
                  <label className={labelStyle} htmlFor="instructor">Instructor Name</label>
                  <input 
                    id="instructor" 
                    className={inputStyle} 
                    placeholder="e.g. Alex Rivers" 
                    type="text"
                    value={courseData.instructor}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelStyle} htmlFor="description">Course Description</label>
                  <textarea 
                    id="description" 
                    className={inputStyle} 
                    placeholder="Briefly describe what students will learn..." 
                    rows="4"
                    value={courseData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section: Curriculum */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <BookOpen className="w-5 h-5 text-[#1c454e]" />
                <h3 className="text-lg font-bold">Curriculum & Lectures</h3>
              </div>
              <div className="space-y-6">
                {lectures.map((lecture) => (
                  <div key={lecture.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1 block">Lecture Title</label>
                      <input 
                        className={inputStyle} 
                        placeholder="e.g. Introduction to Figma" 
                        type="text"
                        value={lecture.title}
                        onChange={(e) => handleLectureChange(lecture.id, 'title', e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1 block">YouTube Embedded Link</label>
                      <input 
                        className={inputStyle} 
                        placeholder="https://youtube.com/embed/..." 
                        type="url"
                        value={lecture.videoUrl}
                        onChange={(e) => handleLectureChange(lecture.id, 'videoUrl', e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-end pb-1">
                      <button 
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors" 
                        type="button"
                        onClick={() => handleRemoveLecture(lecture.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                <button 
                  className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-[#1c454e] hover:border-[#1c454e] transition-all flex items-center justify-center gap-2 font-medium" 
                  type="button"
                  onClick={handleAddLecture}
                >
                  <PlusCircle className="w-5 h-5" /> Add More Lectures
                </button>
              </div>
            </section>

            {/* Section: Media */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <ImageIcon className="w-5 h-5 text-[#1c454e]" />
                <h3 className="text-lg font-bold">Media</h3>
              </div>
              <div>
                <label className={labelStyle} htmlFor="thumbnail-upload">Course Thumbnail</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-xl hover:border-[#1c454e] transition-colors cursor-pointer group">
                  <div className="space-y-1 text-center">
                    {thumbnailPreview ? (
                      <img src={thumbnailPreview} alt="Thumbnail Preview" className="mx-auto h-24 w-24 object-cover rounded-md" />
                    ) : (
                      <UploadCloud className="mx-auto h-12 w-12 text-slate-400 group-hover:text-[#1c454e] transition-colors" />
                    )}
                    <div className="flex text-sm text-slate-600">
                      <label htmlFor="thumbnail-upload" className="relative cursor-pointer bg-white rounded-md font-bold text-[#1c454e] hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#1c454e]">
                        <span>Upload a file</span>
                        <input 
                          id="thumbnail-upload" 
                          name="thumbnail" 
                          type="file" 
                          className="sr-only" 
                          onChange={handleFileChange}
                          accept="image/*" // Restrict to image files
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                    {selectedFile && <p className="text-sm text-slate-700 mt-2">Selected: {selectedFile.name}</p>}
                    {/* Optionally show existing thumbnail name if no new file is selected */}
                    {!selectedFile && isEditMode && courseData.thumbnail && (
                      <p className="text-sm text-slate-700 mt-2">Current: {courseData.thumbnail.split('/').pop()}</p>
                    )}
                  </div>
                </div>
                {/* Option to clear existing thumbnail */}
                {isEditMode && courseData.thumbnail && !selectedFile && (
                  <button
                    type="button"
                    onClick={() => setCourseData(prev => ({...prev, thumbnail: ''}))}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Clear Current Thumbnail
                  </button>
                )}
              </div>
            </section>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 py-6 border-t border-slate-200">
              <button 
                className="px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-all" 
                type="button"
                onClick={() => navigate('/courses-inventory')}
              >
                Cancel
              </button>
              <button 
                className="bg-[#1c454e] text-white font-bold px-10 py-3 rounded-xl hover:bg-[#15343a] transition-all shadow-md" 
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : (isEditMode ? 'Update Course' : 'Save Course')}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CourseForm;