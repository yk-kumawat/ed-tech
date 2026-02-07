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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes