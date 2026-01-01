import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";

const Courses = () => {
  return (
    <div>
      <Header user={true} />
      <div className="flex justify-between">
        <Sidebar />
        <h1>Courses</h1>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Courses;
