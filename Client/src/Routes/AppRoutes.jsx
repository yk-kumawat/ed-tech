// src\Routes\AppRoutes.jsx
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from '../Pages/Dashboard';
import Courses from '../Pages/Courses';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import LearningPath from '../Pages/LearningPath';
import Bookmarks from '../Pages/Bookmarks';
import PrivateRoute from '../Components/PrivateRoute';

import CourseForm from '../Pages/CourseForm';
import CoursesInventory from '../Pages/CoursesInventory';
import Dashboardm from '../Pages/DasboardM';
import VideoSession from '../Pages/VideoSession';
import AssignmentPage from '../Pages/Assignment';
import AdminCourses from '../Pages/AdminCourses';
import CreateCourse from '../Pages/CreateCourse';
import CourseSessions from '../Pages/CourseSessions';
import CreateTask from '../Pages/CreateTask';
import CreateSession from '../Pages/CreateSession';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Routes for regular users */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboardm" element={<Dashboardm/>} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/video-session" element={<VideoSession />} />
        <Route path="/assignment" element={<AssignmentPage />} />

      </Route>

      {/* Protected Route for Admin only */}
      <Route element={<PrivateRoute adminOnly={true} />}>
        <Route path="/courses-inventory" element={<CoursesInventory />} />
        <Route path="/courses-inventory/new" element={<CourseForm />} />
        <Route path="/courses-inventory/edit/:id" element={<CourseForm />} />
      </Route>

      {/* Admin course management */}
      <Route path="/admin/courses" element={<AdminCourses />} />
      <Route path="/admin/create-course" element={<CreateCourse />} />
      <Route path="/course/:courseId" element={<CourseSessions />} />
      <Route path="/admin/add-session/:courseId" element={<CreateSession />} />
      <Route path="/admin/create-task/:sessionId" element={<CreateTask />} />
    </Routes>
  )
}

export default AppRoutes