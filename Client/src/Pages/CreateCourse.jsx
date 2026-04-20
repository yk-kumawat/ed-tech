// src\Pages\CreateCourse.jsx
import { useState } from "react"
import { createCourse } from "../services/api"
import { useNavigate } from "react-router-dom"
import Header from "../Components/Header"

const CreateCourse = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    instructor: "",
    image: null

  })

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("name", form.name)
    formData.append("category", form.category)
    formData.append("description", form.description)
    formData.append("instructor", form.instructor)
    formData.append("image", form.image)

    await createCourse(formData)

    navigate("/admin/courses")
  }

  return (

    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Create New Course
          </h2>

          <button
            onClick={() => navigate("/admin/courses")}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Back
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Course Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Course Name
            </label>

            <input
              name="name"
              placeholder="Enter course name"
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Category
            </label>

            <input
              name="category"
              placeholder="Web Development"
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Instructor */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Instructor
            </label>

            <input
              name="instructor"
              placeholder="Instructor name"
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Write course description..."
              rows="4"
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Course Image */}

          <div>
            <label className="text-sm font-medium text-gray-600">
              Course Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow"
          >
            Create Course
          </button>

        </form>

      </div>

    </div>

  )
}

export default CreateCourse