// src\Components\SessionCard.jsx
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTasks } from "../services/api"

const SessionCard = ({ session }) => {

 const navigate = useNavigate()
 const [tasks, setTasks] = useState([])

 useEffect(() => {
  fetchTasks()
 }, [])

 const fetchTasks = async () => {
  const data = await getTasks(session._id)
  setTasks(data)
 }

 return (

  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

   {/* Thumbnail */}

   {session.thumbnail && (
    <img
     src={session.thumbnail}
     alt="session"
     className="w-full h-40 object-cover"
    />
   )}

   <div className="p-5">

    {/* Session Header */}

    <div className="flex justify-between items-center mb-2">

     <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
      Day {session.day}
     </span>

     <button
      onClick={() => navigate(`/admin/create-task/${session._id}`)}
      className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
     >
      + Task
     </button>

    </div>

    {/* Title */}

    <h3 className="text-lg font-semibold text-gray-800">
     {session.title}
    </h3>

    {/* Description */}

    <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">
     {session.description}
    </p>

    {/* Video Link */}

    {session.videoUrl && (
     <a
      href={session.videoUrl}
      target="_blank"
      className="text-blue-600 text-sm font-medium"
     >
      ▶ Watch Video
     </a>
    )}

    {/* Tasks */}

    <div className="mt-4">

     <p className="text-sm font-semibold text-gray-700 mb-2">
      Tasks
     </p>

     {tasks.length === 0 ? (
      <p className="text-xs text-gray-500">
       No tasks available
      </p>
     ) : (

      <ul className="space-y-2">

       {tasks.map(task => (
        <li
         key={task._id}
         className="bg-gray-100 px-3 py-2 rounded text-sm"
        >
         <p className="font-medium">{task.name}</p>
         <p className="font-light">{task.description}</p>
         <p className="font-light">{task.tools}</p>
         <p className="text-xs text-gray-500">{task.duration}</p>
        </li>
       ))}

      </ul>

     )}

    </div>

    {/* Footer */}

    <div className="flex justify-between items-center mt-5">

     <button
      className="text-blue-600 text-sm font-medium"
     >
      Edit
     </button>

     <button
      className="text-red-500 text-sm font-medium"
     >
      Delete
     </button>

    </div>

   </div>

  </div>

 )

}

export default SessionCard