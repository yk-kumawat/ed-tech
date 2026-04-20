// src\Components\CourseDCard.jsx
import { useNavigate } from "react-router-dom"

const CourseDCard = ({ course }) => {

  const navigate = useNavigate()

  return (

    <div
      className="bg-white rounded-xl shadow p-5 cursor-pointer"
      onClick={() => navigate(`/course/${course._id}`)}
    >

      <div className="mb-4">

        <h3 className="text-lg font-semibold text-gray-800">
          {course.name}
        </h3>

        <p className="text-sm text-gray-500">
          {course.category}
        </p>

      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {course.description}
      </p>

      <div className="flex justify-between items-center">

        <p className="text-xs text-gray-500">
          Instructor
        </p>

        <span className="text-sm font-semibold text-blue-600">
          {course.instructor}
        </span>

        <img
          src={`http://localhost:5000/uploads/${course.image}`}
          className="w-full h-40 object-cover rounded"
        />

      </div>

    </div>

  )

}

export default CourseDCard