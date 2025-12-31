import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Dashboard = () => {
  return (
    <div className="">
      <Header user={true} />
      <div className="flex">
        <Sidebar />
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
