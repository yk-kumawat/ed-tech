import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from '../Pages/Dashboard';
import Courses from '../Pages/Courses';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
