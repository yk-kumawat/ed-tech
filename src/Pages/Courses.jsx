import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Courses = () => {
  return (
    <div>
      <Header user={true} />
      <div className="flex">
        <Sidebar />
        <h1>Courses</h1>
      </div>
    </div>
  );
};

export default Courses;
