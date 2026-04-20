// src\Pages\CreateTask.jsx
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { createTask } from "../services/api"

const CreateTask = () => {

 const { sessionId } = useParams()
 const navigate = useNavigate()

 const [form,setForm] = useState({
  name:"",
  description:"",
  tools:"",
  duration:""
 })

 const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const handleSubmit = async (e)=>{
  e.preventDefault()

  await createTask({
   sessionId,
   name: form.name,
   description: form.description,
   tools: form.tools.split(","),
   duration: form.duration
  })

  alert("Task Created Successfully")

  navigate(-1)
 }

 return(

 <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">

   <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">

     <h2 className="text-2xl font-bold mb-6">
       Create Task
     </h2>

     <form onSubmit={handleSubmit} className="space-y-5">

       <input
        name="name"
        placeholder="Task Name"
        onChange={handleChange}
        className="w-full border p-2 rounded"
       />

       <textarea
        name="description"
        placeholder="Task Description"
        onChange={handleChange}
        className="w-full border p-2 rounded"
       />

       <input
        name="tools"
        placeholder="Tools (React, API, CSS)"
        onChange={handleChange}
        className="w-full border p-2 rounded"
       />

       <input
        name="duration"
        placeholder="Duration (2 hours)"
        onChange={handleChange}
        className="w-full border p-2 rounded"
       />

       <button className="w-full bg-blue-600 text-white py-2 rounded">
        Create Task
       </button>

     </form>

   </div>

 </div>

 )
}

export default CreateTask