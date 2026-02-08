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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Protected Routes for regular users */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Route>

      {/* Protected Route for Admin only */}
      <Route element={<PrivateRoute adminOnly={true} />}>
        <Route path="/courses-inventory" element={<CoursesInventory />} />
        <Route path="/courses-inventory/new" element={<CourseForm />} />
        <Route path="/courses-inventory/edit/:id" element={<CourseForm />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes