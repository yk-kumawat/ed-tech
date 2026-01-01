import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";

const Dashboard = () => {
  return (
    <div className="">
      <Header user={true} />
      <div className="flex justify-between">
        <Sidebar />
        <div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-37 w-85 px-6 py-3 flex flex-col justify-between rounded-lg bg-[#F3F2F2]">
                <p className="text-[#606060]">Continue Learning</p>
                <div>
                  <h3 className="text-xl font-bold">UI / UX</h3>
                  <p className="text-[#606060]">Chapter - 16</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-[#0DC386] px-5 py-1 text-sm rounded-lg text-white font-semibold">Continue</button>
                  <p className="text-[#6F6F6F] font-bold text-sm">Next : Chapter - 17</p>
                </div>
              </div>
              <div className="h-37 w-85 px-6 py-3 flex flex-col justify-between rounded-lg bg-[#F3F2F2]">
                <p className="text-[#606060]">Upcoming Deadlines</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full border-3 border-[#676767] bg-white flex justify-center items-center">
                      <div className="h-4 w-1 rounded-full bg-[#D00000]"></div>
                    </div>
                    <p className="font-semibold">Project - 1 <span className="text-[#606060] font-normal text-sm">Due Today</span> </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full border-3 border-[#676767] bg-white flex justify-center items-center">
                      <div className="h-[0.8em] w-[0.8em] rounded-full bg-[#178431]"></div>
                    </div>
                    <p className="font-semibold">Project - 2 <span className="text-[#606060] font-normal text-sm">Due May 23</span> </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full border-3 border-[#676767] bg-white flex justify-center items-center">
                      <div className="h-[0.8em] w-[0.8em] rounded-full bg-[#178431]"></div>
                    </div>
                    <p className="font-semibold">Project - 3 <span className="text-[#606060] font-normal text-sm">Due June 12</span> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-78 w-90 px-6 py-3 flex flex-col justify-between rounded-lg bg-[#F3F2F2]">
              <p className="text-[#606060]">Recent Activity</p>
            </div>
          </div>
          <div></div>
        </div>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Dashboard;
