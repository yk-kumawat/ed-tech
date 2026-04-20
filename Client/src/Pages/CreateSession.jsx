// src\Pages\CreateSession.jsx
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { createSession } from "../services/api"
import Header from "../Components/Header"

const CreateSession = () => {

 const { courseId } = useParams()
 const navigate = useNavigate()

 const [form,setForm] = useState({
  day:"",
  title:"",
  description:"",
  videoUrl:""
 })

 const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const handleSubmit = async (e)=>{
 e.preventDefault()

 const sessionData = {
   ...form,
   courseId
 }

 const session = await createSession(sessionData)

 navigate(`/course/${courseId}`)
}

 return(
<div className="bg-white">
      <Header />
 <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">

   <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">

     {/* Header */}
     <div className="flex justify-between items-center mb-6">

       <h2 className="text-2xl font-bold text-gray-800">
         Create Session
       </h2>

       <button
        onClick={()=>navigate(`/course/${courseId}`)}
        className="text-sm text-gray-500 hover:text-gray-700"
       >
        Back
       </button>

     </div>

     {/* Form */}
     <form onSubmit={handleSubmit} className="space-y-5">

       {/* Day */}
       <div>
         <label className="text-sm font-medium text-gray-600">
          Day
         </label>

         <input
          type="number"
          name="day"
          placeholder="Day 1"
          required
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
         />
       </div>

       {/* Title */}
       <div>
         <label className="text-sm font-medium text-gray-600">
          Title
         </label>

         <input
          name="title"
          placeholder="Session title"
          required
          onChange={handleChange}
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
          placeholder="Session description"
          rows="4"
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
         />
       </div>

       {/* Video URL */}
       <div>
         <label className="text-sm font-medium text-gray-600">
          Video URL
         </label>

         <input
          name="videoUrl"
          placeholder="https://youtube.com/..."
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
         />
       </div>

       {/* Button */}
       <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow"
       >
        Create Session
       </button>

     </form>

   </div>

 </div>
 </div>

 )

}

export default CreateSession