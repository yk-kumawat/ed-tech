import React from "react";
import JavaLogo from "../assets/JavaLogo.png";
import MongoDBLogo from "../assets/MongoDBLogo.png";
import SQLLogo from "../assets/SQLLogo.png";
import UIUXLogo from "../assets/UIUXLogo.png";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";
import MainCourseCard from "../Components/MainCourseCard";

const Courses = () => {
  const MainCourseCardData = {
    img: UIUXLogo,
    title: "UI/UX",
    lessons: 30,
    quiz: 50,
    assignments: 4,
    percent: 65
  };
  return (
    <div className="h-screen">
      <Header user={true} />
      <div className="flex justify-between h-178 w-full overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col h-full items-center overflow-y-scroll no-scrollbar">
          <div className="flex flex-col gap-4 mt-8">
            <h1 className="text-2xl font-semibold">Courses</h1>
            <div className="h-60 w-230 bg-slate-100 rounded-lg py-3 px-5">
              <div className="flex justify-between">
                <h3 className="text-[#606060]">New Courses</h3>
                <button className="text-[#D0793E] text-xs font-semibold cursor-pointer">
                  View All
                </button>
              </div>
              <div className="flex justify-evenly items-center mt-6">
                <div>
                  <div className="h-32 w-50 bg-white flex justify-center items-center rounded-lg">
                    <img className="h-22" src={JavaLogo} alt="" />
                  </div>
                  <div>
                    <p className="text-[#0a2478] text-lg font-semibold">
                      Java -{" "}
                      <span className="text-sm text-[#606060]">Lessons 30</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="h-32 w-50 bg-white flex justify-center items-center rounded-lg">
                    <img className="h-22" src={MongoDBLogo} alt="" />
                  </div>
                  <div>
                    <p className="text-[#0a2478] text-lg font-semibold">
                      MongoDB -{" "}
                      <span className="text-sm text-[#606060]">Lessons 20</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="h-32 w-50 bg-white flex justify-center items-center rounded-lg">
                    <img className="h-22" src={SQLLogo} alt="" />
                  </div>
                  <div>
                    <p className="text-[#0a2478] text-lg font-semibold">
                      SQL -{" "}
                      <span className="text-sm text-[#606060]">Lessons 30</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-[#D0793E] font-semibold mb-4">Recent View</h1>
            <div className="flex justify-between w-230">
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
            </div>
          </div>
          <div className="my-8">
            <h1 className="text-[#D0793E] font-semibold mb-4">All Courses</h1>
            <div className="flex gap-17 flex-wrap w-230">
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Courses;
