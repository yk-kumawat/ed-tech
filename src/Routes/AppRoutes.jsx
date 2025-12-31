import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from '../Pages/Dashboard';
import Courses from '../Pages/Courses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  )
}

export default AppRoutes
