import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";

const Dashboard = () => {
  return (
    <div className="bg-white">
      <Header user={true} />
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex flex-col gap-6 py-10">
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative h-40 w-100 px-6 py-3 flex flex-col justify-between rounded-lg bg-slate-100">
                <div className="absolute w-22 h-22 top-5 right-5 rounded-full bg-[conic-gradient(green_0%_65%,#bfdbfe_65%_100%)] flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-700">65%</span>
                  </div>
                </div>
                <p className="text-[#606060]">Continue Learning</p>
                <div>
                  <h3 className="text-xl font-bold">UI / UX</h3>
                  <p className="text-[#606060]">Chapter - 16</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-[#0DC386] hover:bg-[#0fdc97] px-5 py-1 text-sm rounded-lg text-white font-semibold">
                    Continue
                  </button>
                  <p className="text-[#6F6F6F] font-bold text-sm">
                    Next : Chapter - 17
                  </p>
                </div>
              </div>
              <div className="relative h-41 w-100 px-6 py-4 flex flex-col justify-between rounded-lg bg-slate-100">
                <p className="text-[#606060]">Upcoming Deadlines</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full border-3 border-[#676767] bg-white flex justify-center items-center">
                      <div className="h-4 w-1 rounded-full bg-[#D00000]"></div>
                    </div>
                    <p className="font-semibold">
                      Project - 1{" "}
                      <span className="text-[#606060] font-normal text-sm">
                        Due Today
                      </span>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full border-3 border-[#676767] bg-white flex justify-center items-center">
                      <div className="h-[0.8em] w-[0.8em] rounded-full bg-[#178431]"></div>
                    </div>
                    <p className="font-semibold">
                      Project - 2{" "}
                      <span className="text-[#606060] font-normal text-sm">
                        Due May 23
                      </span>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full border-3 border-[#676767] bg-white flex justify-center items-center">
                      <div className="h-[0.8em] w-[0.8em] rounded-full bg-[#178431]"></div>
                    </div>
                    <p className="font-semibold">
                      Project - 3{" "}
                      <span className="text-[#606060] font-normal text-sm">
                        Due June 12
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <button className="absolute bottom-3 right-4 text-[#D0793E] text-xs font-semibold self-end cursor-pointer">
                  View All
                </button>
              </div>
            </div>
            <div className="h-85 w-100 px-6 py-3 flex flex-col justify-between rounded-lg bg-slate-100">
              <p className="text-[#606060]">Recent Activity</p>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <p className="font-semibold">Color Combinations</p>
                    <p className="text-[#606060]">75%</p>
                  </div>
                  <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
                    <div className="w-[75%] h-full bg-[#875ABD] rounded-full"></div>
                  </div>
                </div>
                <div className="border border-[#D9D9D9]"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <p className="font-semibold">Design Principals</p>
                    <p className="text-[#606060]">53%</p>
                  </div>
                  <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
                    <div className="w-[53%] h-full bg-[#875ABD] rounded-full"></div>
                  </div>
                </div>
                <div className="border border-[#D9D9D9]"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <p className="font-semibold">Introduction</p>
                    <p className="text-[#606060]">100%</p>
                  </div>
                  <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
                    <div className="h-full bg-[#875ABD] rounded-full"></div>
                  </div>
                </div>
                <div className="border border-[#D9D9D9]"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <p className="font-semibold">Introduction</p>
                    <p className="text-[#606060]">85%</p>
                  </div>
                  <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
                    <div className="w-[85%] h-full bg-[#875ABD] rounded-full"></div>
                  </div>
              </div>
              <button className="text-[#D0793E] text-xs font-semibold self-end cursor-pointer">
                View All
              </button>
            </div>
          </div>
          <div className="w-208 h-50 bg-slate-100"></div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
